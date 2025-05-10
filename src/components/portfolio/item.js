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
  width: 90%;
  padding: 0 30px;
  margin: auto;
`

const PortfolioImage = styled.div`
  display: grid;
  place-items: center;
  width: auto;
  img {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: 220px;
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
