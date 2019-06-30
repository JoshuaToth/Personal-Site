import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { ImageIOT } from '../image-queries'
export const ReactPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.react.childImageSharp.fluid} />}
  />
)
