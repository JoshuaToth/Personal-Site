import * as React from 'react';
import { Col } from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';
import './community.scss';


var content = `# Community Activities
### [ALT.NET](https://www.meetup.com/en-AU/Melbourne-ALT-NET/)
#### Organiser, Sometimes Host, Presenter
The Australian Alt.Net Community is a self-organizing, ad-hoc community of developers bound by a desire to improve ourselves, challenge assumptions, and help each other pursue excellence in the practice of software development, obviously with a strong emphasis on development using the Microsoft.NET platform.
### [DDD Melbourne](https://www.dddmelbourne.com/)
#### Volunteer, Presenter
DDD Melbourne is a non profit community event run by developers for developers. Anyone can submit a session to the event and delegates then vote on the sessions they want to see.</p>
### [DDD By Night](http://dddbynight.dddmelbourne.com/)
#### Organiser, Presenter
DDD By Night is a miniconference run a few times a year. It consists of several lightning talks on all sorts of topics. Voted in by the community.`;

export const Community = (props) => {
    return (
        <div className='page' id='community' >
            <ReactMarkdown source={content}/>
        </div>
    );
};

