/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import data from "./../data/data.json"

import Header from "./header"
import { MainPage } from "./styled"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         menuLinks {
  //           name
  //           link
  //           description
  //         }
  //       }
  //     }
  //   }
  // `)

  console.log('data', data);

  return (
    <>
      <Header
        menuLinks={data.menuLinks}
        siteTitle={data.title}
      />
      <MainPage>{children}</MainPage>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        Code by
        {` `}
        <a href="https://www.romeroruiz.com">romeroruiz.com</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
