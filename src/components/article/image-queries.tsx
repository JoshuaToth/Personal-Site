import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export const SquareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 418, maxHeight: 280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

const ImageIOT = graphql`
  query {
    iot: file(relativePath: { eq: "iotSplash.png" }) {
      ...squareImage
    }
    react: file(relativePath: { eq: "react-cover.png" }) {
      ...squareImage
    }
    git: file(relativePath: { eq: "git-logo.png" }) {
      ...squareImage
    }
    freeBird: file(relativePath: { eq: "free-bird.png" }) {
      ...squareImage
    }
    monolithCircle: file(relativePath: { eq: "monolith-circle.png" }) {
      ...squareImage
    }
  }
`;

export const IOTPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.iot.childImageSharp.fluid} />}
  />
);

export const ReactPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.react.childImageSharp.fluid} />}
  />
);

export const GitPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.git.childImageSharp.fluid} />}
  />
);

export const FreeBirdPhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.freeBird.childImageSharp.fluid} />}
  />
);

export const MonolithCirclePhoto = () => (
  <StaticQuery
    query={ImageIOT}
    render={(data) => <Img fluid={data.monolithCircle.childImageSharp.fluid} />}
  />
);
