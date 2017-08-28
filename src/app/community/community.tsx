import * as React from 'react';
import { Col } from 'react-bootstrap';
import './community.scss';

export const community = (props) => {
    return (
        <div className='page' id='community' >
            <div className='header-image'>
                <img src='../../img/castle.jpg'></img>
            </div>
            <h1>Community Activities</h1>
            <a target='_blank' href='https://www.meetup.com/en-AU/Melbourne-ALT-NET/'><h2>ALT.NET</h2></a>
            <h3>Organiser, Sometimes Host, Presenter</h3>
            <p>The Australian Alt.Net Community is a self-organizing, ad-hoc community of developers bound by a desire to improve ourselves, challenge assumptions, and help each other pursue excellence in the practice of software development, obviously with a strong emphasis on development using the Microsoft.NET platform.</p> 

            <a target='_blank' href='https://www.dddmelbourne.com/'><h2>DDD Melbourne</h2></a>
            <h4>Developer Developer Developer</h4>
            <h3>Volunteer, Presenter</h3>
            <p>DDD Melbourne is a non profit community event run by developers for developers. Anyone can submit a session to the event and delegates then vote on the sessions they want to see.</p>

            <a target='_blank' href='http://dddbynight.dddmelbourne.com/'><h2>DDD By Night</h2></a>
            <h3>Organiser, Presenter</h3>
            <p>DDD By Night is a miniconference run a few times a year. It consists of several lightning talks on all sorts of topics. Voted in by the community.</p>

        </div>
    );
};
