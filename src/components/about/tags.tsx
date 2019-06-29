import React, { Component } from 'react'
import { TagsCollection, TagsSection } from './about.styles'
import { Size, SkillTag } from './tag'
// import { Link } from "gatsby"


export default class Tags extends Component<any> {
  public render(): React.ReactNode {
    return (
      <TagsSection>
        <TagsCollection>
          {SkillTag('NodeJs', Size.large)}
          {SkillTag('React', Size.large)}
          {SkillTag('AWS', Size.large)}
        </TagsCollection>
        <TagsCollection>
          {SkillTag('.Net')}
          {SkillTag('GraphQL')}
          {SkillTag('Javascript')}
          {SkillTag('Typescript')}
          {SkillTag('Lambda')}
          {SkillTag('Terraform')}
          {SkillTag('Microservices')}
          {SkillTag('Docker')}
          {SkillTag('Elasticsearch')}
        </TagsCollection>
      </TagsSection>
    )
  }
}
