import { ArticleContent } from './components/article-content';
import * as React from 'react';
import * as Scroll from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {

  currentPage = 'about-me';

  divStyle = {
    backgroundImage: 'url(./img/docklands-small.jpg)'
  };

  scrollPage() : void {
    window.scrollTo(0, window.innerHeight);
  }

  scrollTo(point: string) : void  {
    Scroll.scroller.scrollTo(point,
      {
        duration: 700,
        delay: 20,
        smooth: 'easeInOutQuint'
    });
  }

  showPage(pageTitle: string) : void {
    var el = document.getElementById(this.currentPage);
    el.style.visibility = 'hidden';
    el.style.display = 'none';

    el = document.getElementById(pageTitle);
    el.style.visibility = 'visible';
    el.style.display = 'inline';

    this.currentPage = pageTitle;
  }

  render() {
    return (
      <div>
        <Grid className='container-full'>
          <Row className='main-header'>
            <div className='intro' style={this.divStyle}>
              <div className='title-name'>
                <h1 id='titlename'>{'Joshua Toth'}</h1>
                <h4>{'Holistic software engineer'}</h4>
                <a target='blank' href='https://www.twitter.com/tothjoshuaj'><i className='fa fa-twitter fa-5'></i></a>
                <a target='blank' href='https://github.com/JoshuaToth'><i className='fa fa-github fa-5'></i></a>
                <a target='blank' href='https://www.linkedin.com/in/joshua-toth-aab7b8b0/'><i className='fa fa-linkedin fa-5'></i></a>
              </div>
              <i className='fa fa-angle-double-down fa-6' aria-hidden='true' onClick={() => this.scrollTo('the-rest')}></i>
            </div>
          </Row>
          <Row id='the-rest' className='the-rest'>
            <Col md={3}></Col>
            <Col md={6}>
              <ArticleContent
                title={'Creating own website part 1: The build and design of the site'}
                tldr={'I decided it was time for me to build my own website and publish it to my own domain. I think it’s something that every developer should try.'}
                date={'21st September 2017'}
                articleLocation={'./byo-site-1'}
              />
              <ArticleContent
                title={'DynamoDB and Projection Expressions — Why?'}
                tldr={'While modifying one of our API endpoints, I realised the need for another (endpoint) to read from DynamoDB. I deep dive into projection expressions'}
                date={'25 May 2016'}
                articleLocation={'https://medium.com/pageup-tech/dynamodb-and-projection-expressions-why-c08c40243195'}
              />
              <ArticleContent
                title={'About Me'}
                date={'Updated 2 September 2017'}
                articleLocation={'./about'}
              />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
