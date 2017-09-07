import * as React from 'react';
import { Col } from 'react-bootstrap';

import './article-content.scss';


export const Title = (props) => {
    return (
        <div className='article-title'>
            <h1>{ props.title }</h1>
        </div>
    );
};

export const Tldr = (props) => {
    return (
        <div className='article-tldr'>
            <h4>{ props.tldr }</h4>
        </div>
    );
};

export const PostDate = (props) => {
    return (
        <div className='article-date'>
            <i><h6>{ props.date }</h6></i>
        </div>
    );
};

export const Article = (props) => {
    return (
        <div className='article'>
            <a href={props.articleLocation}><Title {...props}/></a>
            <Tldr {...props}/>
            <PostDate {...props}/>
        </div>
    );
};
