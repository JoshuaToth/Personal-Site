import { AboutMe } from './about/about';
import { Article } from './components/article-content';
import * as React from 'react';
import * as About from './about/about';
import * as Scroll from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {

  currentPage = 'about-me';

  divStyle = {
    backgroundImage: 'url(./img/docklands.jpg)'
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
              </div>
              <i className='fa fa-angle-double-down fa-6' aria-hidden='true' onClick={() => this.scrollTo('the-rest')}></i>
            </div>
          </Row>
          <Row id='the-rest' className='the-rest'>
            <Col md={3}></Col>
            <Col md={6}>
              <Article
                title={'DynamoDB and Projection Expressions — Why?'}
                tldr={'While modifying one of our API endpoints, I realised the need for another (endpoint) to read from DynamoDB. I deep dive into projection expressions'}
                date={'25 May 2016'}
                articleLocation={'https://medium.com/pageup-tech/dynamodb-and-projection-expressions-why-c08c40243195'}
              />
              {/* <Article
                title={'About Me'}
                tldr={'I describe myself and the community organisations I\'m part of'}
                date={'Updated 2 September 2017'}
              /> */}
              <br/>
              <br/>
              <AboutMe />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
