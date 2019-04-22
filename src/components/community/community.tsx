import React, { Component } from "react"
import { CardWrapper, OuterLayout } from "./community.styles"
import {
  BorderUnderline,
  HeaderText,
  HeaderTextWrapper,
  InnerLayout,
} from "../../styles/global-layout"
import Card from "./card"
import CardHackImage from "./card-hack-image"
import DDDImage from "./ddd-image"
import AltNetImage from "./alt-net-image"


export default class Community extends Component<any> {
  render(): React.ReactNode {
    return (
      <OuterLayout>
        <InnerLayout>
          <HeaderTextWrapper>
            <HeaderText>
              Community
            </HeaderText>
            <BorderUnderline/>
          </HeaderTextWrapper>
          <Card
            title={'Hackathon - Winner'}
            subtitle={'February 2019 - BCGDV - DEPAUL - London - Hacking homelessness'}
            imgSrc={CardHackImage}
            copy={`Amazing. copy goes here.`}
          />
          <CardWrapper>
            <Card
              title={'DDD - Organiser & Presenter'}
              subtitle={'2016 - 2018 - DDD Melbourne - Melbourne'}
              imgSrc={DDDImage}
              copy={`Amazing. copy goes here.`}
            />
            <Card
              title={'Alt.net - Host & Organiser'}
              subtitle={'2016 - 2018 - Alt.net - Melbourne'}
              imgSrc={AltNetImage}
              copy={`Amazing. copy goes here.`}
            />
          </CardWrapper>
        </InnerLayout>
      </OuterLayout>
    )
  }
}
