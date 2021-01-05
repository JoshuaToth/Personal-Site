import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

export const HackathonImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hackathon-win.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
