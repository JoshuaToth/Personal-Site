import React, { Component } from 'react';
import {
} from '../../styles/global-layout';
import { CardCopy, CardLayout, CardOuterLayout, Subtitle, Title } from './community.styles';

export interface CardProps {
  imgSrc: any;
  title: string;
  subtitle: string;
  copy: string;
}

export default class Card extends Component<CardProps> {
  public render(): React.ReactNode {
    const ImgSrc = this.props.imgSrc;
    return (
      <CardOuterLayout>
        <Title>
          {this.props.title}
        </Title>
        <Subtitle>
          {this.props.subtitle}
        </Subtitle>
        <CardLayout>
          <ImgSrc/>
          <CardCopy>
            <p>
              {this.props.copy}
            </p>
          </CardCopy>
        </CardLayout>
      </CardOuterLayout>
    );
  }
}
