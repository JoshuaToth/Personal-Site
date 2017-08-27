import * as React from 'react';
import * as About from './about/about';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={3} lg={3}>
              <img id='displayphoto' src='../img/DisPic.png' alt='Terrible display photo'/>
              <h1 id='titlename'>{'Joshua Toth'}</h1>
            </Col>
            <Col sm={9} lg={9}>
              <About.AboutMe />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
