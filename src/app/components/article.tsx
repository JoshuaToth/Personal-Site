import * as React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';

import './article.scss';

export const ArticleHeader = (props) => {
    return (
        <div className='article-header' style={ props.background }>
            <Button className='back btn btn-outline-secondary' href='../'>Back</Button>
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
            <p className='footer'><b>Joshua Toth</b> © 2017</p>
        </div>
    );
};
