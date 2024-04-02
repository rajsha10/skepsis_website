import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMOBiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fontspring DEMO Biennale Bold';
    src: url(${FontspringDEMOBiennaleBold}) format('opentype');
  }
`;

const Header = (props) => {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Logo>
          <img src="/images/Logo1.svg" alt="Logo" />
        </Logo>
        <Menu>
          <ul>
            <li>about</li>
            <li>clubs</li>
            <li>events</li>
            <li>team</li>
            <li>contact</li>
          </ul>
        </Menu>
        <Sign>lorem, ipsum</Sign>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: yellow; */
  height: 5.7rem;
`;

const Logo = styled.div`
  img {
    height: auto;
    width: 11.7rem;
    cursor: pointer;
  }

  margin-left: 2.2rem;
`;

const Menu = styled.div`
  width: 50%;

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    font-family: 'Fontspring DEMO Biennale Bold', sans-serif;
    color: #575757;
  }

  li {
    position: relative; /* Added for positioning the ::before pseudo-element */
    cursor: pointer;
  }

  li::before {
    background-color: #575757;
    border-radius: 0 0 4px 4px;
    bottom: -3px;
    content: "";
    height: 2px;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    transform-origin: center center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: 100%;
  }

  li:hover::before {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const Sign = styled.button`
    color: #515151;
    font-size: 17px;
    font-family: 'Fontspring DEMO Biennale Bold', sans-serif;
    background: transparent;
    border: 2px #BCBCBC solid;
    padding: 12px 45px;
    border-radius: 34px;
    margin-right: 2.2rem;
    cursor: pointer;
    transition : all 0.15s ease;

    &:hover{
        scale: 0.99;
        border-color: #515151;
    }

`; 

export default Header;
