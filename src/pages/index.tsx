import React, { Component } from 'react'
// import { Link } from "gatsby"

import { Global } from '@emotion/core'
import About from '../components/about/about'
import Article from '../components/article/article'
import Community from '../components/community/community'
import Cover from '../components/cover/cover'
import Layout from '../components/default-components/layout'
import SEO from '../components/default-components/seo'
import Footer from '../components/footer/footer'
import { GlobalBack } from '../styles/global-layout'

export default class IndexPage extends Component<any> {
  public render(): React.ReactNode {
    return (
      <Layout>
        <Global styles={GlobalBack} />
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,700' rel='stylesheet'/>
        <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
        <Cover />
        <About />
        <Article />
        <Community />
        <Footer />
      </Layout>
    )
  }
}
