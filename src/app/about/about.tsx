import * as React from 'react';

export const AboutMe = (props) => {
    return (
        <div className="aboutMe" >
            <h1>About me</h1>
        <p>
            I'm a Full Stack Software Developer working in Melbourne. 
            <br/>I love technology and building software! I'm always wanting to learn new and exciting things.
            <br/>I'm also an active member of the community, participating in few community organisations.
            <ul>
                <li><a href="dddmelbourne.com">DDD Melbourne</a></li>
                <li><a href="http://dddbynight.dddmelbourne.com/">DDD By Night</a></li>
                <li><a href="https://www.meetup.com/en-AU/Melbourne-ALT-NET/">ALT.NET</a></li>
            </ul>
        </p>
        </div>
    );
};