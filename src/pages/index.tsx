import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/default-components/layout"
import SEO from "../components/default-components/seo"
import { Global } from "@emotion/core"
import { GlobalBack } from "../styles/global-layout"
import Cover from "../components/cover/cover"
import About from "../components/about/about"
import Article from "../components/article/article"
import Community from "../components/community/community"
import Footer from "../components/footer/footer"

export default class IndexPage extends Component<any> {
  render(): React.ReactNode {
    return (
      <Layout>
        <Global styles={GlobalBack} />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,700" rel="stylesheet"/>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Cover />
        <About />
        <Article />
        <Community />
        <Footer />
      </Layout>
    )
  }
}
