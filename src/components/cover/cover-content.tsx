import React, { Component } from 'react'
import {
  BorderUnderline,
  FirstWord,
  InnerLayout,
  SecondWord,
} from '../../styles/global-layout'
import { ContentWrapper, Description, ImageWrapper } from './cover.styles'

import DisplayPhoto from '../display-photo'

export default class CoverContent extends Component<any> {
  public render(): React.ReactNode {
    return (
      <InnerLayout>
        <ContentWrapper>
          <div>
            <div>
              <FirstWord>Joshua</FirstWord>
              <SecondWord>Toth</SecondWord>
              <BorderUnderline />
              <Description>
                Fullstack Software Developer <br /> Based in London
              </Description>
            </div>
          </div>
          <ImageWrapper>
            <DisplayPhoto />
          </ImageWrapper>
        </ContentWrapper>
      </InnerLayout>
    )
  }
}
