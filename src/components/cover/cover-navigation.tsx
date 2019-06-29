import React, { Component } from 'react'
import { InnerLayout } from '../../styles/global-layout'
import { CoverLayout, NavigationWrapper } from './cover.styles'
// tslint:disable-next-line: no-var-requires
const Logo = require('../../icons/logo.svg')

export default class Navigation extends Component<any> {
  public render(): React.ReactNode {
    return (
      <InnerLayout>
        <CoverLayout>
          <Logo />
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
