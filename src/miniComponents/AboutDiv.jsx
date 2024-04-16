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

const AboutDiv = ({title, info}) => {
    return(
        <>
            <GlobalStyle />
            <InfoArea>
                <p className="title">{title}</p>
                <p className="information">{info}</p>
            </InfoArea>
        </>
    );

};

const InfoArea = styled.div`
    position: relative;
    height: 17rem;
    width: 13rem;
    background-color: #DBDBDB;
    border: none;
    border-radius: 30px;
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 20px;
    color: #000000;
    cursor: pointer;
    transition: all 0.18s ease-in-out;
    
    &::before{
        content: '';
        background: linear-gradient(to bottom, #CDCDCD, #ffffff);
        border-radius: 32px;
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        margin: -2.5px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }

    .title{
        font-size: 20px;
        font-family: 'FontSpring Biennale Medium';
    }
    
    .information{
        font-size: 14px;
        font-family: 'Clash Display Regular';
    }

    &:hover{
        box-shadow: 0 5px 10px rgba(0,0,0,0.4);
    }
`;

export default AboutDiv;