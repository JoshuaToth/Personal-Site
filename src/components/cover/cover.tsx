import React, { Component } from "react"
import { InnerLayout } from "../../styles/global-layout"
import { CoverLayout, NavigationWrapper, OuterLayout } from "./cover.styles"
import Navigation from "./cover-navigation"
import CoverContent from "./cover-content"


export default class Cover extends Component<any> {
  render(): React.ReactNode {
    return (
      <OuterLayout>
        <Navigation/>
        <CoverContent/>
      </OuterLayout>
    )
  }
}
