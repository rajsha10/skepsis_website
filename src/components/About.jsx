// About.jsx

import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import ClashDisplayRegular from "/fonts/ClashDisplay-Regular.otf";
import FontspringDEMObiennaleMedium from "/fonts/Fontspring-DEMO-biennale-medium.otf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Clash Display Regular';
    src: url(${ClashDisplayRegular}) format('opentype');
  }
  @font-face {
    font-family: 'FontSpring Biennale Medium';
    src: url(${FontspringDEMObiennaleMedium}) format('opentype');
  }
`;

const About = (props) => {
  return (
    <>
        <GlobalStyle />
        <AllCont>
                <Aboutcont>
                <h2>About Us</h2>
                </Aboutcont>
                
                <Bringcont1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </Bringcont1>

                <Bringcont2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eminim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ivol</p>
                </Bringcont2>                  
        </AllCont>
   
    </>
   
  );
};
const AllCont = styled.div`
    ${'' /* background-color: yellow; */}
    width: 100%;
    margin-top: 90px;

`;
const Aboutcont = styled.div`
display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    margin-top: 90px;
    height: 100%; 
`;
const Bringcont1 = styled.div`
display: flex;
    justify-content: center; 
    align-items: center;
    text-align: center; 
    margin-top: 15px;
    height: 100%; 
    p{
        width:70%;
        font-family: 'Clash Display Regular';
        font-size: 20px;
        font-weight: 1000;
        ${'' /* text-shadow: 0 20px 10px rgba(0,0,0,0.23); */}
    }
`;
const Bringcont2 = styled.div`
display: flex;
    justify-content: center; 
    align-items: center; 
    text-align: center;
    width: 100%;
    margin-top: 30px;
    height: 100%; 
    p{
        width: 55%;
        font-family: 'Clash Display Regular';
        font-size: 18px;
        text-shadow: 0 20px 10px rgba(0,0,0,0.23);
    }
`;

export default About;

