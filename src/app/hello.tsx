import * as React from 'react';
import * as About from './about/about';
import * as Community from './community/community';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {
  render() {
    return (
      <div>
        <Grid className='container-full'>
          <Row >
            <Col className='left-bar' sm={3} lg={3}>
              <img id='displayphoto' src='../img/DisPic.png' alt='Terrible display photo'/>
              <h1 id='titlename'>{'Joshua Toth'}</h1>
              <button type='button' className='btn btn-outline-light btn-lg'>About Me <i className='fa fa-angle-right'></i></button>
              <button type='button' className='btn btn-outline-light btn-lg'>Community<i className='fa fa-angle-right'></i></button>
            </Col>
            <Col className='content-column' sm={9} lg={9}>
              <About.AboutMe />
              <Community.community />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
