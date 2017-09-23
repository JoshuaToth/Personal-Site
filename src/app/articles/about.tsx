import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = ` # About me
Full stack Polyglot Software Developer.

Continual self-improvement by exploration of new technologies. (Web, DevOps, Database, Language, etc)

Huge community advocate, member and participant of several community organisations.

Innovator for software providing practical solutions for real business needs. 

Experienced in microservices and distributed, cloud-based systems. 

I believe my most valuable assets as a software developer include:
- The ability to empower any team I’m part of.
- The ability to rise to the challenge and fit into any position needed.
- Quick uptake on technologies and development environments & ecosystems. 

Experienced in breaking down monoliths and moving from local to distributed systems. 

Specialties: Software Architecture, Microservices, working with and breaking apart monolith systems, influencing company culture, distributed systems, Cloud, DevOps practices, Javascript development and .NET development. 

# Community Activities
### [ALT.NET](https://www.meetup.com/en-AU/Melbourne-ALT-NET/)
#### Organiser, Sometimes Host, Presenter
The Australian Alt.Net Community is a self-organizing, ad-hoc community of developers bound by a desire to improve ourselves, challenge assumptions, and help each other pursue excellence in the practice of software development, obviously with a strong emphasis on development using the Microsoft.NET platform.
### [DDD Melbourne](https://www.dddmelbourne.com/)
#### Volunteer, Presenter
DDD Melbourne is a non profit community event run by developers for developers. Anyone can submit a session to the event and delegates then vote on the sessions they want to see.</p>
### [DDD By Night](http://dddbynight.dddmelbourne.com/)
#### Organiser, Presenter
DDD By Night is a miniconference run a few times a year. It consists of several lightning talks on all sorts of topics. Voted in by the community.`;

const divStyle = {
    background: 'url(./img/DDD.jpg-large) no-repeat 50% 80%'
  };

export const AboutMe = (props) => {
    return (
        <div className='about-article'>
            <Article content={content} background={divStyle} />
        </div>
    );
};
