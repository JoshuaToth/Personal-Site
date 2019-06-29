import React, { Component } from 'react';
import {
  BorderUnderline,
  FirstWord,
  InnerLayout,
  SecondWord,
} from '../../styles/global-layout';
import ArticlePreview, { ArticleConfig, ButtonType } from './article-card';
import { ArticleConfigs } from './article-config';
import {
  ArticleControls,
  Articles,
  ChevronWrapper,
  OuterLayout,
} from './article.styles';
import { IOTPhoto } from './image-queries';

const ChevronRight = require('../../icons/chevron-right-solid.svg');
const ChevronLeft = require('../../icons/chevron-left-solid.svg');

export default class Article extends Component<
  any,
  { newArticles: ArticleConfig[]; current: number }
> {
  public state = {
    newArticles: ArticleConfigs.slice(0, 4),
    current: 0,
  };

  public getNewArticles = (start: number) => {
    const offsetStart = start - 2;

    return ArticleConfigs.slice(
      offsetStart < 0 ? 0 : offsetStart,
      offsetStart + 5,
    );
  }

  public changeSelected = (amount: number) => {
    let newCurrent = this.state.current + amount;
    newCurrent = newCurrent < 0 ? 0 : newCurrent;
    newCurrent =
      newCurrent < ArticleConfigs.length - 1
        ? newCurrent
        : ArticleConfigs.length - 1;
    this.setState({
      current: newCurrent < 0 ? 0 : newCurrent,
      newArticles: this.getNewArticles(newCurrent),
    });
  }

  public render(): React.ReactNode {
    return (
      <OuterLayout>
        <InnerLayout>
          <FirstWord>Latest</FirstWord>
          <SecondWord>Articles</SecondWord>
          <BorderUnderline />
          <ArticleControls>
            <ChevronWrapper onClick={() => this.changeSelected(-1)}>
              {this.state.current > 0 ? <ChevronLeft /> : null}
            </ChevronWrapper>
            <Articles>
              {this.state.newArticles.map((article: ArticleConfig) => (
                <ArticlePreview
                  imgObj={article.imgObj}
                  articleTitle={article.articleTitle}
                  articleBlurb={article.articleBlurb}
                  buttonType={article.buttonType}
                  link={article.link}
                  order={ArticleConfigs.indexOf(article)}
                  currentNumber={this.state.current}
                  addedOrder={article.addedOrder}
                  key={article.addedOrder}
                />
              ))}
            </Articles>
            <ChevronWrapper onClick={() => this.changeSelected(1)}>
              {this.state.current < ArticleConfigs.length - 1 ? (
                <ChevronRight />
              ) : null}
            </ChevronWrapper>
          </ArticleControls>
        </InnerLayout>
      </OuterLayout>
    );
  }
}
