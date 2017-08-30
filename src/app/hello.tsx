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
          <Row className='top-bar'>
            <Col className='left-bar row-fluid'>
              <h1 id='titlename'>{'Joshua Toth'}</h1>
              <div className='block'>
                <i className="fa fa-circle" aria-hidden="true" onClick={ () => this.showPage('about-me') }></i>
                <i className="fa fa-circle" aria-hidden="true" onClick={ () => this.showPage('community') } ></i>
              </div>
              <br/>
            </Col>
          </Row>
          <Row className='content-row'>
            <Col className='content-column'>
              <About.AboutMe />
              <Community.community />
              <img className='content-shadow' src='../img/banner-shadow.png'></img>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
