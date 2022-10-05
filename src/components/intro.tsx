import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import styles from './styles/intro.module.css'
import Img from 'gatsby-image'
import { NextSection } from './next-section'

const Medium = require('../icons/medium-brands.svg')
// tslint:disable-next-line: no-var-requires
const Github = require('../icons/github-brands.svg')
// tslint:disable-next-line: no-var-requires
const Email = require('../icons/envelope-solid.svg')
// tslint:disable-next-line: no-var-requires
const Twitter = require('../icons/twitter-brands.svg')

const DP = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      alt="display photo of my mug"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export const Intro = () => (
  <div className={styles.introWrapper}>
    <div className={styles.intro}>
      <div className={styles.left}>
        <h1>Joshua Toth</h1>
        <h3>
          A passionate techie based out of Melbourne currently working as a
          Prototyping Engineer at Amazon Web Services.
        </h3>
        <Link to="https://medium.com/@joshua-toth" target="_blank">
          <h3>I also publish articles.</h3>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.displayPhoto}>
          <DP />
        </div>
        <div className={styles.icons}>
          <Link to="https://github.com/JoshuaToth" target="_blank">
            <Github />
          </Link>
          <Link to="https://medium.com/@joshua-toth" target="_blank">
            <Medium />
          </Link>
          <a href="mailto:josh@jjt.dev" target="_blank">
            <Email />
          </a>
          <Link to="https://twitter.com/TothJoshuaJ" target="_blank">
            <Twitter />
          </Link>
        </div>
      </div>
    </div>

    <NextSection href="#work" sectionName="work" />
  </div>
)
