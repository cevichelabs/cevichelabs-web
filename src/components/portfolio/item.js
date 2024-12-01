import React from "react"
import styled from "styled-components"
import Image from "next/image"

const PorfolioWrapper = styled.nav`
  align-items: start;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  justify-content: space-between;
  margin: 100px auto;
  max-width: 1200px;
  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const PortFolioLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 0 30px;
  width: 90%;
`

const PortfolioImage = styled.div`
  display: grid;
  height: 220px;
  place-items: center;
  width: auto;
  img {
    width: 75%;
    height: auto;
  }
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
          <PortfolioImage>
            <Image key={index} src={item.image} width={165} height={"auto"} />
          </PortfolioImage>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
        </PortFolioLink>
      )
    })}
  </PorfolioWrapper>
)
