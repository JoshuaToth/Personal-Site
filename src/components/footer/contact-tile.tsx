import React, { Component } from 'react'
import { TileWrapper } from './footer.styles'

export interface ITileProps {
  icon: any
  copy: string
  url: string
}

export default class ContactTile extends Component<ITileProps> {
  public render(): React.ReactNode {
    const Icon = this.props.icon
    return (
      <TileWrapper>
        <Icon />
        <a href={this.props.url} target={'blank'}>
          {this.props.copy}
        </a>
      </TileWrapper>
    )
  }
}
