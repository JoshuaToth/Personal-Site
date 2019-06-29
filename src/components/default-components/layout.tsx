import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { GlobalLayout } from '../../styles/global-layout'

const Layout = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => <GlobalLayout>{children}</GlobalLayout>}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
