import React, { Component } from 'react';
import { BorderUnderline, FirstWord, InnerLayout, SecondWord } from '../../styles/global-layout';
import ContactTile from './contact-tile';
import { ContactWrapper, Copyright, OuterLayout } from './footer.styles';
// import { Link } from "gatsby"

const Twitter = require('../../icons/twitter-brands.svg');
const Medium = require('../../icons/medium-brands.svg');
const Github = require('../../icons/github-brands.svg');
const Email = require('../../icons/envelope-solid.svg');

export default class Footer extends Component<any> {
  public render(): React.ReactNode {
    return (
      <OuterLayout>
        <InnerLayout>
          <FirstWord>Contact</FirstWord>
          <BorderUnderline/>
          <ContactWrapper>
            <ContactTile
              icon={Email}
              copy={'josh@jjt.dev'}
              url={'mailto:josh@jjt.dev'}
            />
            <ContactTile
              icon={Github}
              copy={'JoshuaToth'}
              url={'https://github.com/joshuatoth'}
            />
            <ContactTile
              icon={Medium}
              copy={'Joshua Toth'}
              url={'https://medium.com/@tothjoshuaj'}
            />
            <ContactTile
              icon={Twitter}
              copy={'TothJoshuaJ'}
              url={'https://twitter.com/TothJoshuaJ'}
            />
          </ContactWrapper>
          <Copyright>Copyright 2019 Joshua Toth</Copyright>
        </InnerLayout>
      </OuterLayout>
    );
  }
}