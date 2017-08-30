import * as React from 'react';
import { Col } from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';

import './about.scss';
declare function require(name:string);

var content = ` # About me
I'm a Full Stack Software Developer working in Melbourne. 

I love technology and building software! I'm always wanting to learn new and exciting things.

I'm also an active member of the community, participating in few community organisations.`;

export const AboutMe = (props) => {
    return (
        <div className='page' id='about-me'>
            <ReactMarkdown source={content}/>
        </div>
    );
};
