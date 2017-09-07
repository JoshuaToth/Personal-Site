import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';

import './article.scss';

export const ArticleHeader = (props) => {
    return (
        <div className='article-header' style={ props.background }>
            {/* <img src={props.img}/> */}
        </div>
    );
};

export const ArticleBody = (props) => {
    return (
        <div className='article-body'>
            <Grid>
                <Row>
                    <Col md={1}/>
                    <Col md={10}>
                        <ReactMarkdown source={props.content}/>
                    </Col>
                    <Col md={1}/>
                </Row>
            </Grid>
        </div>
    );
};

export const Article = (props) => {
    return (
        <div className='article' id='about-me'>
            <ArticleHeader img={props.headerImage} background={props.background}/>
            <ArticleBody content={props.content}/>
        </div>
    );
};
