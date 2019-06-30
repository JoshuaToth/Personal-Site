import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const ImageIOT = graphql`
  query {
    monolithCircle: file(relativePath: { eq: "monolith-circle.png" }) {
      childImageSharp {
        fluid(maxWidth: 418, maxHeight: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const MonolithCirclePhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.monolithCircle.childImageSharp.fluid} />}
  />
)
