import * as React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';

import './article.scss';

export const ArticleHeader = (props) => {
    return (
        <div className='article-header' style={ props.background }>
            <Button className='back btn btn-info' href='../'>Back</Button>
            <Button className='subscribe btn btn-info' href='http://feeds.feedburner.com/JoshuaToth'><i className='fa fa-rss fa-5'></i> Subscribe</Button>
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
            <Disqus/>
            <p className='footer'><b>Joshua Toth</b> © 2017. info@joshuatoth.com</p>
        </div>
    );
};

class Disqus extends React.Component<null, null> {
    disqus_config = function () {
        let d = document, s = d.createElement('script');
        s.src = 'https://joshuatoth.disqus.com/embed.js';
        s.setAttribute('data-timestamp', new Date().toUTCString());
        (d.head || d.body).appendChild(s);

    };

    render() {
        this.disqus_config();
        return (
            <div className='disqus'>
                <Grid>
                    <Row>
                        <Col md={2}/>
                        <Col md={8}>
                            <div id='disqus_thread'></div>
                            <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript> 
                        </Col>
                        <Col md={2}/>
                    </Row>
                </Grid>                      
            </div>
        );
    }
}
