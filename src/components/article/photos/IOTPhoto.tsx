import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const ImageIOT = graphql`
  query {
    iot: file(relativePath: { eq: "iotSplash.png" }) {
      childImageSharp {
        fluid(maxWidth: 418, maxHeight: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const IOTPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.iot.childImageSharp.fluid} />}
  />
)
