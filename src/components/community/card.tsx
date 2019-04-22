import React, { Component } from "react"
import { CardCopy, CardLayout, CardOuterLayout, Subtitle, Title } from "./community.styles"
import {
} from "../../styles/global-layout"

export type CardProps = {
  imgSrc: any;
  title: string;
  subtitle: string;
  copy: string;
}

export default class Card extends Component<CardProps> {
  render(): React.ReactNode {
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
    )
  }
}
