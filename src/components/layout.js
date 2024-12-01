import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import data from "./../data/data.json"

import Header from "./header"
import { MainPage } from "./styled"

const MainFooter = styled.footer`
  padding: 20px;
  text-align: center;
  margin-top: 0;
`

const Layout = ({ children }) => {

  return (
    <>
      <Header
        menuLinks={data}
        siteTitle={data.title}
      />
      <MainPage>{children}</MainPage>
      <MainFooter>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://nextjs.org">Nextjs</a>
        {` `}
        code by
        {` `}
        <a href="https://romeroruiz.com">romeroruiz.com</a>
      </MainFooter>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
