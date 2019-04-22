import React, { Component } from "react"
import { CoverLayout, NavigationWrapper } from "./cover.styles"
import { InnerLayout } from "../../styles/global-layout"
const Logo = require('../../icons/logo.svg');

// import { Link } from "gatsby"


export default class Navigation extends Component<any> {
  render(): React.ReactNode {
    return (
      <InnerLayout>
        <CoverLayout>
          <Logo/>
          <NavigationWrapper>
            <p>About</p>
            <p>Articles</p>
            <p>Community</p>
            <p>Contact</p>
          </NavigationWrapper>
        </CoverLayout>
      </InnerLayout>
    )
  }
}
