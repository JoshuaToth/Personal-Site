import * as React from 'react';
import * as About from './about/about';
import * as Community from './community/community';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {

  currentPage = 'about-me';

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
          <Row >
            <Col className='left-bar row-fluid'>
              <h1 id='titlename'>{'Joshua Toth'}</h1>
              <div className='block'>
                <button type='button' onClick={ () => this.showPage('about-me') } className='btn btn-outline-dark btn-lg'>About Me</button>
                <button type='button' onClick={ () => this.showPage('community') } className='btn btn-outline-dark btn-lg'>Community</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='content-column'>
              <About.AboutMe />
              <Community.community />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
