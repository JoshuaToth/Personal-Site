import React, { Component } from 'react'
import {
  BorderUnderline,
  HeaderText,
  HeaderTextWrapper,
  InnerLayout,
} from '../../styles/global-layout'
import AltNetImage from './alt-net-image'
import Card from './card'
import CardHackImage from './card-hack-image'
import { CardWrapper, OuterLayout } from './community.styles'
import DDDImage from './ddd-image'

export default class Community extends Component<any> {
  public render(): React.ReactNode {
    return (
      <OuterLayout id='community'>
        <InnerLayout>
          <HeaderTextWrapper>
            <HeaderText>Community</HeaderText>
            <BorderUnderline />
          </HeaderTextWrapper>
          <Card
            title={'Hackathon - Winner'}
            subtitle={
              'February 2019 - BCGDV - DEPAUL - London - Hacking homelessness'
            }
            imgSrc={CardHackImage}
            // tslint:disable-next-line: max-line-length
            copy={'Utilising my idea, my 3 teammates and I worked tirelessly to produce AskPaul: A communication framework targeting youth on the verge of homelessness. By considering the needs and symptoms of unprepared homelessness, we were able to target a massive problem area. The solution we produced was intentionally branded to be un-accusatory and intended to be used by those who do not consider themselves homeless. We chose a tech stack that was cheap and easy to implement with little to no hosting overhead, ensuring databases and confronting sign up workflows were avoided.' }
          />
          <CardWrapper>
            <Card
              title={'Alt.net - Host & Organiser'}
              subtitle={'2016 - 2018 - Alt.net - Melbourne'}
              imgSrc={AltNetImage}
              // tslint:disable-next-line: max-line-length
              copy={ 'Since 2016, I have hosted and co-organised the Alt.net meetup in Melbourne. The meetup has around 2000 members with monthly sessions where one to three guest presenters talked about their passion: .Net. I enjoy being involved in the community and firmly believe this culture makes our profession awesome.'}
            />
            <Card
              title={'DDD - Organiser & Presenter'}
              subtitle={'2016 - 2018 - DDD Melbourne - Melbourne'}
              imgSrc={DDDImage}
              // tslint:disable-next-line: max-line-length
              copy={ 'After presenting a talk on Microservices at DDD 2016 I decided to get involved with the community organisation. For the next couple years I was a several time presenter at DDD Nights as well as assisting in organising several DDD events.'}
            />
          </CardWrapper>
        </InnerLayout>
      </OuterLayout>
    )
  }
}
