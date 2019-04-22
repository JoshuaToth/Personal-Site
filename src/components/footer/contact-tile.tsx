import React, { Component } from "react"
import { ContactWrapper, OuterLayout, TileWrapper } from "./footer.styles"
import { BorderUnderline, FirstWord, InnerLayout, SecondWord } from "../../styles/global-layout"
// import { Link } from "gatsby"

export type TileProps = {
  icon: any;
  copy: string;
  url: string;
}

export default class ContactTile extends Component<TileProps> {
  render(): React.ReactNode {
    const Icon = this.props.icon;
    return (
      <TileWrapper>
        <Icon/>
        <a href={this.props.url} target={'blank'}>{this.props.copy}</a>
      </TileWrapper>
    )
  }
}
