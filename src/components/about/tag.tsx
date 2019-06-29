import React from 'react'
import { TagWrapper } from './about.styles'
// import { Link } from "gatsby"

export enum Size {
  large,
  small,
}

export const SkillTag = (
  copy: string,
  size: Size = Size.small,
): JSX.Element => {
  return <TagWrapper size={size}>{copy}</TagWrapper>
}
