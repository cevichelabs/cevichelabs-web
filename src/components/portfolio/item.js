import React from "react"
import styled from "styled-components";

const PorfolioWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  max-width: 1024px;
  margin: 100px auto;
  align-items: top;
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
  }
`

const PortFolioLink = styled.a`
  color: black;
  display: block;
  text-decoration: none;
  margin: 0 15px;
`

const PortfolioImage = styled.img`
  width: auto;
  height: auto;
  padding: 5px;
`

export const PortfolioItem = ({ items }) => (
  <PorfolioWrapper>
    {items.map((item, index) => {
      return (
        <PortFolioLink key={index} href={item.url} title={item.label} target="_blank">
          <PortfolioImage key={index} src={`${item.image}`} />
        </PortFolioLink>
      )
    })}
  </PorfolioWrapper>
)
