import React, { Component } from 'react';
import { BorderUnderline, FirstWord, InnerLayout, SecondWord } from '../../styles/global-layout';
import { ContactWrapper, OuterLayout, TileWrapper } from './footer.styles';
// import { Link } from "gatsby"

export interface TileProps {
  icon: any;
  copy: string;
  url: string;
}

export default class ContactTile extends Component<TileProps> {
  public render(): React.ReactNode {
    const Icon = this.props.icon;
    return (
      <TileWrapper>
        <Icon/>
        <a href={this.props.url} target={'blank'}>{this.props.copy}</a>
      </TileWrapper>
    );
  }
}
