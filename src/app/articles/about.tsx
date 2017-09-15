import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = ` # About me
I'm a Full Stack Software Developer working in Melbourne. 

I love technology and building software! I'm always wanting to learn new and exciting things.

I'm also an active member of the community, participating in few community organisations.

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
    backgroundImage: 'url(./img/docklands-small.jpg)'
  };

export const AboutMe = (props) => {
    return (
        <div className='about-article'>
            <Article content={content} background={divStyle} headerImage='../img/docklands-small.jpg'/>
        </div>
    );
};
