import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMObiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";
import ToggleSwitch from "../miniComponents/ToggleSwitch";
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
            <MainCont>
                <HeadingAbout>about</HeadingAbout>
                <ToggleSwitch />
                <InfoArea>
                    <AboutDiv title='Angelina Jolie'
                     info='Angelina Jolie is an American actress, filmmaker and humanitarian.' />
                    <div className="twoCards">
                        <AboutDiv title='Brad Pitt'
                        info='William Bradley Pitt is an American actor and film producer.' />
                        <AboutDiv title='Akshay Kumar'
                        info='Akshay Hari Om Bhatia, known professionally as Akshay Kumar, 
                        is an Indian actor and film producer working in Hindi cinema' />
                    </div>
                    <AboutDiv title='Shah Rukh Khan'
                     info='Shah Rukh Khan, also known by the initialism SRK,
                      is an Indian actor and film producer who works in Hindi films.' />
                </InfoArea>
            </MainCont>
        </>
    );

};

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