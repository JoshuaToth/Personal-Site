import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const ImageIOT = graphql`
  query {
    freeBird: file(relativePath: { eq: "free-bird.png" }) {
      childImageSharp {
        fluid(maxWidth: 418, maxHeight: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const FreeBirdPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.freeBird.childImageSharp.fluid} />}
  />
)
