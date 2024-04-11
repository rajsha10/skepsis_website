// About.jsx

import React from 'react';
import styled, { createGlobalStyle } from "styled-components";

const About = (props) => {
    
    
    return(
        <>
            
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

const MainCont = styled.div`
    /* background-color: yellow; */
    width: 100%;
    height: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`;

const HeadingAbout = styled.p`
    width: 100%;
    text-align: center;
    font-family: 'FontSpring Biennale Bold';
    font-size: 5.2rem;
    text-shadow: 0 5px 10px rgba(0,0,0,0.3);
`;

const InfoArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    .twoCards{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default About;

