import * as React from 'react';
import { Col } from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';

import './article.scss';

export const ArticleHeader = (props) => {
    return (
        <div className='article-header'>
            <img src={props.headerImage}/>
        </div>
    );
};

export const ArticleBody = (props) => {
    return (
        <div className='article-body'>
            <ReactMarkdown source={props.content}/>
        </div>
    );
};

export const Article = (props) => {
    return (
        <div className='page' id='about-me'>
            <ArticleHeader img={props.headerImage}/>
            <ArticleBody content={props.content}/>
        </div>
    );
};
