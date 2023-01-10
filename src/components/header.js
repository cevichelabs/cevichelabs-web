import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "./../images/logo.svg"
import { colors } from "./constants"

const HeaderComponent = styled.header`
  background: #223D98;
  display: flex;
  height: 150px;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    height: 100px;
  }
`;

const HeaderContentLogo = styled.div`
  background: #253672;
`

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 100%;
`;

const HeaderTitle = styled.h1`
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  span {
    text-indent: -9999px;
  }
  img {
    margin: 0;
  }
  svg {
    margin: auto;
    display: block;
  }
  @media only screen and (max-width: 480px) {
    width: 85px;
  }
`;

const HeaderSlogan = styled.h2`
  align-items: initial;
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  margin: 25px 10px auto 0;
  font-family: 'Asap', sans-serif;
  width: 200px;
  @media only screen and (max-width: 1024px) {
    width: 90px;
    line-height: 16px;
    font-size: 14px;
    margin: 0;
    margin-left: auto;
    margin-right: 75px;
  }
`;

const HeaderDot = styled.span`
  color: red;
`;

const HeaderMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1em;
  line-height: 1em;
  flex-basis: 100%;
  a {
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
  }
  @media (max-width: 1024px) {
    display: ${(props) => props.show ? 'flex' : 'none'};
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 0;
    z-index: 3;
    height: 100%;
    background-color: ${colors.mainColor};
    a {
      margin: 30px 0;
      flex-basis: 0;
      padding: 0;
    }
  }
`;

const HeaderMenuItem = styled.big`
  font-family: 'BenchNine', sans-serif;
  font-size: 30px;
  display: flex;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
`;

const HeaderMenuDescription = styled.small`
  font-size: 0.75em;
  margin-top: 3px;
  font-family: 'Asap', sans-serif;
`;

const MainMenu = styled.div`
  background-color: #253672;
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.260864' y1='1.77905' x2='21.1304' y2='1.77905' stroke='white' stroke-width='3' stroke-linejoin='round'/%3E%3Cline x1='0.260864' y1='10.4697' x2='21.1304' y2='10.4697' stroke='white' stroke-width='3' stroke-linejoin='round'/%3E%3Cline x1='0.260864' y1='19.1602' x2='21.1304' y2='19.1602' stroke='white' stroke-width='3' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    margin-right: 10px;
    position: absolute;
    z-index: 5;
    right: 10px;
  }
`;

const Header = ({ siteTitle, menuLinks }) => {

  const [show, setShow] = React.useState(false);
  console.log('siteTitle', siteTitle);

  return (
    <HeaderComponent>
      <HeaderContent>
        <HeaderContentLogo>
          <HeaderTitle>
            <Link href="/">
              <img
                src={Logo}
                data-src={Logo}
                alt="CevicheLabs"
              />
            </Link>
          </HeaderTitle>
        </HeaderContentLogo>
        <HeaderMenu show={show}>
          {menuLinks.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <HeaderMenuItem>{item.name}</HeaderMenuItem>
                <HeaderMenuDescription>{item.description}</HeaderMenuDescription>
              </Link>
            )
          })}
        </HeaderMenu>
        <HeaderSlogan>
          <HeaderDot>.</HeaderDot>Laboratorio de soluciones digitales
        </HeaderSlogan>
        <MainMenu
          show={show}
          onClick={() => {
            setShow(!show)
          }}
        />
      </HeaderContent>
    </HeaderComponent>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteMenu: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteMenu: ``,
}

export default Header
