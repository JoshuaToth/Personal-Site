import React, { Component } from 'react';
import {
  ArticleBlurb,
  ArticleCard,
  ArticleCover,
  ArticleDescription,
  ArticleTitle,
  ArticleWrapperAnchor,
  ArticleWrapperDiv,
  LinkButtonWrapper,
  SplashImage,
} from './article.styles';

// tslint:disable-next-line: no-var-requires
const ArrowRight = require('../../icons/arrow-right-solid.svg');

export enum ButtonType {
  medium = 'Medium',
  jjt = 'jjt.dev',
}

export interface ArticleConfig {
  imgObj: any;
  articleTitle: string;
  articleBlurb: string;
  buttonType: ButtonType;
  link: string;
  addedOrder: number;
}

export interface ArticleProps extends ArticleConfig {
  order: number;
  currentNumber: number;
}

export default class ArticlePreview extends Component<ArticleProps> {
  public static defaultProps = {
    order: 0,
    currentNumber: 0,
  };

  public render(): React.ReactNode {
    let focusLevel = this.props.order - this.props.currentNumber;
    const zLevel = focusLevel;

    if (focusLevel < -1) { focusLevel = -1; }
    if (focusLevel > 1) { focusLevel = 1; }

    const background = Math.abs(focusLevel) > 0;
    return (
      <ArticleWrapperDiv
        focusLevel={focusLevel}
        zLevel={zLevel}
        background={background}
      >
        {background ? <ArticleCover /> : null}
        <ArticleWrapperAnchor href={this.props.link} target={'blank'}>
          <ArticleCard>
            <SplashImage>{this.props.imgObj}</SplashImage>
            <ArticleDescription background={background}>
              <ArticleTitle>{this.props.articleTitle}</ArticleTitle>
              <ArticleBlurb>{this.props.articleBlurb}</ArticleBlurb>
              <LinkButtonWrapper>
                <p>
                  Read on {this.props.buttonType.toString()}
                  <ArrowRight />
                </p>
              </LinkButtonWrapper>
            </ArticleDescription>
          </ArticleCard>
        </ArticleWrapperAnchor>
      </ArticleWrapperDiv>
    );
  }
}
