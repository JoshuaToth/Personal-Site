import React, { Component } from 'react';
import { InnerLayout } from '../../styles/global-layout';
import CoverContent from './cover-content';
import Navigation from './cover-navigation';
import { CoverLayout, NavigationWrapper, OuterLayout } from './cover.styles';


export default class Cover extends Component<any> {
  public render(): React.ReactNode {
    return (
      <OuterLayout>
        <Navigation/>
        <CoverContent/>
      </OuterLayout>
    );
  }
}
