import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const ImageIOT = graphql`
  query {
    git: file(relativePath: { eq: "git-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 418, maxHeight: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const GitPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.git.childImageSharp.fluid} />}
  />
)
