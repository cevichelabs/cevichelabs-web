import React from "react"
import styled from "styled-components";

const PorfolioWrapper =styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 100px auto;
`

const PortfolioImage = styled.img`
  width: auto;
  height: auto;
  padding: 5px;
`

export const PortfolioItem = ({ items, images }) => (
  <PorfolioWrapper>
    {images.map((item, index) => 
      <PortfolioImage key={index} src={item} />
    )}
    {/* {items.map((item, index) => {
      return (
        <a key={index} href={item.url} target="_blank">
          <p>{item.image}</p>
        </a>
      )
    })} */}
  </PorfolioWrapper>
)
