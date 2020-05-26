import styled from "styled-components"

export const Grid = styled.div`
  height: ${(props) => props.height}
`

export const Row = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `
}

export const Col = styled.div`
  flex: ${(props) => props.size};
  flex-basis: 100%;
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)}
`
