import React from "react"
import styled from "styled-components"
import Image from "next/image"

const PorfolioWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  max-width: 1024px;
  margin: 100px auto;
  align-items: center;
  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PortFolioLink = styled.a`
  color: black;
  display: block;
  text-decoration: none;
  margin: 0 30px;
  width: 90%;
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
        <PortFolioLink
          key={index}
          href={item.url}
          title={item.label}
          target="_blank"
          alt={item.label}
        >
          <Image key={index} src={item.image} width={165} height={"auto"} />
        </PortFolioLink>
      )
    })}
  </PorfolioWrapper>
)
