import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { ImageIOT } from '../image-queries'
export const GitPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.git.childImageSharp.fluid} />}
  />
)
