import React, { Component } from 'react';
import { InnerLayout } from '../../styles/global-layout';
import { BodyWrapper, HeaderText, HeaderTextWrapper, OuterLayout, TagWrapper } from './about.styles';
// import { Link } from "gatsby"

export enum Size {
  large,
  small,
}

export const SkillTag = (copy: string, size: Size = Size.small): JSX.Element => {
    return (
      <TagWrapper
        size={size}
      >
        {copy}
      </TagWrapper>
    );
};
