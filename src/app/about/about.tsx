import * as React from 'react';
import { Col } from 'react-bootstrap';
import './about.scss';

export const AboutMe = (props) => {
    return (
        <div className='page' id='about-me' >
            <div className='header-image'>
                <img src='../../img/engleberg.jpg'></img>
            </div>
            <h1>About me</h1>
            <p>
                I'm a Full Stack Software Developer working in Melbourne. 
                <br/>I love technology and building software! I'm always wanting to learn new and exciting things.
                <br/>I'm also an active member of the community, participating in few community organisations.
            </p>    
        </div>
    );
};
