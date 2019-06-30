import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const ImageIOT = graphql`
  query {
    react: file(relativePath: { eq: "react-cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 418, maxHeight: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const ReactPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.react.childImageSharp.fluid} />}
  />
)
