import * as React from 'react';
import * as About from './about/about';
import * as Community from './community/community';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {

  currentPage = 'about-me';

  scrollPage() : void {
    window.scrollTo(0, window.innerHeight)
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

  divStyle = {
    backgroundImage: 'url(./img/snowy.JPG)',
  };
  

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
              <i className='fa fa-angle-double-down fa-6' aria-hidden='true' onClick={() => this.scrollPage()}></i>
            </div>
          </Row>
          <Row className='the-rest'>
            <Col md={2}></Col>
            <Col md={8}>
              <About.AboutMe />
              <Community.Community />
            </Col>
            <Col md={2}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
