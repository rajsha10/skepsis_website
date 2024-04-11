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

const Team = (props) => {
  return (
    <>
        <GlobalStyle/>
            
    </>
  );
};

export default Team;
