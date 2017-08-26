import * as React from 'react';
import * as About from './about/about'
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {
  render() {
    return (
      <div>
        <img id='displayphoto' src='../img/DisPic.png' alt='Terrible display photo'/>
        <h1 id='titlename'>{'Joshua Toth'}</h1>
        <About.AboutMe />
      </div>
    );
  }
}
