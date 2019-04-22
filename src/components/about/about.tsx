import React, { Component } from "react"
import { BodyWrapper, OuterLayout } from "./about.styles"
import { BorderUnderline, HeaderText, HeaderTextWrapper, InnerLayout, SecondWord } from "../../styles/global-layout"
import Tags from "./tags"
// import { Link } from "gatsby"


export default class About extends Component<any> {
  render(): React.ReactNode {
    return (
      <OuterLayout>
        <InnerLayout>
          <HeaderTextWrapper>
            <HeaderText>
              About
            </HeaderText>
            <BorderUnderline/>
          </HeaderTextWrapper>
          <BodyWrapper>
            <p>I am an innovator for software, providing practical solutions for real business needs. I am experienced in microservices and distributed, cloud-based systems. I am continually improving my skills through exploration of new technologies. (Web, DevOps, Database, Language, etc)</p>
            <h2>Huge community advocate</h2>
            <p>Member and participant in several community organisations</p>
            <h2>My most valuable assets</h2>
            <p>
              The ability to empower any team I’m part of.
              <br/>The ability to rise to the challenge and fit into any position needed.
              <br/>Quick uptake on technologies and development environments &amp; ecosystems.
            </p>
            <h2>Mentor</h2>
            <p>
              Mentor to several junior/intermediate developers
              <br/>Always happy to lend a hand and assist out those seeking help
              <br/>Developer of <a href={"https://joshuatoth.github.io/SenpaiPathway/"} target="blank">Senpai Pathway</a> The platform to assist mentors focus on helping their mentees by providing problems that can be solved together.
            </p>
          </BodyWrapper>
          <Tags/>
        </InnerLayout>
      </OuterLayout>
    )
  }
}
