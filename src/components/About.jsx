import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import ToggleSwitch from '../miniComponents/ToggleSwitch';
import FontspringDEMObiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";
import AboutDiv from "../miniComponents/AboutDiv";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FontSpring Biennale Bold';
    src: url(${FontspringDEMObiennaleBold}) format('opentype');
  }
`;

const About = (props) => {
    return(
        <>
            <GlobalStyle />
            <AllCont>
                <HeadCont>
                    <img src="/images/leftArrow.svg" alt="" id="leftArrow" />
                    <div id='aboutHeadCont'>
                        <h3 id='aboutHead'>about us</h3>
                        <ToggleSwitch />
                    </div> 
                    <img src="/images/arrowRight.svg" alt="" id="rightArrow" />
                </HeadCont>
                <InfoCont>
                    <p id="str1">-----</p>
                    <AboutDiv title="Lorem, ipsum." info="Lorem ipsum dolor sit amet." />
                    <div className="twoInfo">
                        <AboutDiv title="Lorem, ipsum." info="Lorem ipsum dolor sit amet." />
                        <AboutDiv title="Lorem, ipsum." info="Lorem ipsum dolor sit amet." />
                    </div>
                    <AboutDiv title="Lorem, ipsum." info="Lorem ipsum dolor sit amet." />
                    <p id="str2">-----</p>
                </InfoCont>  
            </AllCont>
        </>
    );

};

const AllCont = styled.div`
    height: 100vh;
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadCont = styled.div`
    width: 50%;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    #aboutHeadCont{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #aboutHead{
        font-family: 'FontSpring Biennale Bold';
        font-size: 4.5rem;
        text-align: center;
        color: #000000;
        margin-bottom: .5rem;
    }

    #leftArrow, #rightArrow{
        position: absolute;
        width: 40%;
    }

    #leftArrow{
        top: 5rem;
        left: -6rem;
    }
    
    #rightArrow{
        bottom: 2.5rem;
        right: -6rem;
    }
`;

const InfoCont = styled.div`
    position: relative;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    #str1{
        font-size: 3rem;
        position: absolute;
        top: 32%;
        left: 30%;
        z-index: -1;
    }
    #str2{
        font-size: 3rem;
        position: absolute;
        z-index: -1;
        top: 40%;
        right: 30%;
    }
`;

export default About;

