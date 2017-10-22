import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = `# Microservice mistakes part 1: Push vs Pull vs Pub/Sub
For the last few years at PageUp we have been on a microservice journey. Starting with a monolith we've been slowly pulling it apart. As a member of the first team to start building microservices, throughout our projects we have a few learnings to share.
## The Mistake: 
Pushing our data around and worrying about state across multiple systems and processes.
### Details
This was a service that users filled out information in a form and then submitted that form as part of a workflow. The model is the 'Forms service' own the lifecycle of the form until it is submitted and then the monolith owns it from there.
#### The original - 'push' workflow
![alt text](../img/mm-mistakes-pvpvp/pushvpull.png "Push Model diagram")

1. The form is loaded from our Forms Microservice into an Angular SPA embedded in our site

--- Begin HTTP Transaction 1 ---
2. The form is submitted as the user completes it and returned to the forms service with a POST
3. Data is persisted to the DB in our forms service. 

--- Begin HTTP Transaction 2 ---
4. The data is then pushed to our Monolith via a REST API call
5. Workflows are kicked off and data is created and persisted to the monolith SQL DB
6. Http Request returns with result. If there is a 500 all the data persistence from step 3 is rolled back with a DB write to correct the data

--- End HTTP transaction 2 ---
7. Return a status code to the Front end

--- End HTTP transaction 1 ---

--- Begin HTTP transaction 3 ---
8. Using a webforms request that existed as part of a previous workflow on the page the SPA was embedded in, mark the form task as complete for the user to see.

--- End HTTP transaction 3
#### Holy moly
I'm sure the majority of you are cringing right now. It wasn't in this state for a long time, but it was long enough that it caused us a LOT of pain. 

Let's discuss where some of that pain came from.
Things are kind of fine until we finish step 3. Anything after this was highly prone to erroring and some of the more unsavoury elements of distributed computing. 
- The first issue we came across was the second HTTP request quite often timed out (we were the only application utilising the API and it was running on an IIS app pool that would go to sleep after not being used for x minutes). Meaning The form service had no choice but to roll it's progress back. Side effects of this were:
    - The forms in the microservice were not in a submitted state, but the monolith database said it was
    - The user had probably exited the form at this point and was unaware that the form had failed to submit. This had to be either manually fixed by a supervisor or the user had to come back and resubmit. 
- Step 5 The workflow would often fail to correctly create the data it needed, or take overly long to complete. We also weren't deploying this API on demand at the time (we are now) so any code issues had at least a 2 day turnaround to fix. Meaning if the API was fundamentally broken (and It did happen) the whole service was more or less unusable until it was fixed.
- Step 6 and 7 this return could sometimes be timed juuuust right that the first request would time out leading the front end to perceive the request as a failure while the whole back end of the system was actually OK.
- Step 8. This was a bit of a frustrating part of the workflow. We used tooling that was already available because it was convenient at the time, however if the user at any point after clicking the submit button closed the page (And they would, often) final part of the workflow would not be completed.

This was the workflow by the time we were at MVP. Over the next couple months we moved to an intermediate pull model with some redundancies included in-case some of the more timing-based parts failed. 
### Midway - The 'pull' model
![alt text](../img/mm-mistakes-pvpvp/pushvpull2.png "Pull Model diagram")

The Biggest change here is we moved mostly away from the push model. We introduced a small service runner on the side of the monolith that would poll the forms service every few seconds and look for any forms that had already been submitted.
The form workflow would take the submitted form, persist it as a submitted form and then return a 200OK and the front end would cosmetically mark the task as completed.
When the forms were picked up by the polling service, the forms service would mark the form as 'sent' and the monoliths own workflows were created. The form tasks were also marked as completed here on the DB side. This whole process usually happened within 5ish seconds so unless the user submitted the form and refreshed the page instantly, there would be no disparity showing the form or task as uncompleted. 

This model had couple of big improvements: 
- The forms service could act pretty much independently of the monolith API 
during the submit process so the forms didn't rely on a chain of http requests or state that needed to be synchronised during a single call. If the monolith was down or not responding for any reason, the forms workflow could still be completed. 
- The response time to the user was much faster. (Although by this time the monolith API no longer went to sleep anyway.)

As the title suggest, this was only the midway solution for this area of our system. It alleviated much of the pain we were feeling but it isn't scaleable and the monolith still has the responsibility of checking for changes even when none are available. 

# Semi-Final - Pub/Sub Model
![alt text](../img/mm-mistakes-pvpvp/pushvpull3.png "Pub/Sub Model diagram")

The next stage of refining our process and setting some of the groundwork for an event-bus pattern was the introduction of SNS. After submitted form has been processed by our forms service it place a notification onto its own amazon SNS topic. This is an event pub/sub service offered by AWS. Following this pattern, the SNS topic is owned by the service and included as part of its infrastructure. The monolith then subscribes to the SNS topic and is notified of a form being submitted and then proceeds with the rest of the forms workflow. Not shown in the diagram is the polling service that has been modified as a 'long poll' service which just waits for events from the SNS topic. 
A couple benefits here worth mentioning: 
- This solution is infinitely scalable and the SNS topic can support multiple subscribers.
- No more unnecessary polling of the forms service.
- Complete separation of responsibilities. Both the forms service and the monolith only need to care about their own state. 

# The final solution. 
This is moving into event-bus territory and should be a topic all on its own. The semi-final solution is a pattern than can be followed in the infancy of your microservices journey, replicated across your different projects and future proofs your solution by enabling you to swap out that SNS topic at any point in the future fairly safely. 

This was an examination into the pain we felt with our first journey into microservices, I hope others can learn from our mistakes, we certainly did. 

`;
// image sourced from here: https://static.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg freely and legally.
const divStyle = {
    backgroundImage: 'url(./img/mm-mistakes-pvpvp/network.jpeg)'
  };

export const MicroMistakes1 = (props) => {
    return (
        <div className='react-router-fix-article'>
            <Article content={content} background={divStyle}/>
        </div>
    );
};
