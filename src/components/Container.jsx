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


const Container = (props) => {
    return(
        <>
            <GlobalStyle />
            <AllCont>
                <BringCont>
                    <img src="/images/blueBubble.svg" id="blueBubble" alt="" />
                    <MainImg>
                        <img src="/images/bring.svg" alt="bring" />
                    </MainImg>
                    <img src="/images/pinkBubble.svg" id="pinkBubble" alt="" />
                </BringCont>
                <TextCont>
                    <img id="purpleBall" src="/images/purpleBall.svg" alt="purpleBall" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Eveniet repudiandae praesentium similique odit quas excepturi rem saepe aut quod ullam.
                    </p>
                    <img id="purpleSpiral" src="/images/purpleSpiral.svg" alt="purpleSpiral" />
                </TextCont>
                <ButtonCont>
                    <Join>Join Community</Join>
                    <More>See More Details About Us</More>
                </ButtonCont>
            </AllCont>
        </>
    );
};

const AllCont = styled.div`
    ${'' /* background-color: yellow; */}
    width: 100%;
    margin-top: 20px;
`;

const BringCont = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #blueBubble{
        position: relative;
        bottom: -190px;
        width: 12rem; 
    }
    
    img{
        width: 100%;
    }
    
    #pinkBubble{
        position: relative;
        top: 0;
        width: 10.5rem;
    }
`;

const MainImg = styled.div`
    width: 40%;
    height: 100%;
`;

const TextCont = styled.div`
    width: 100%;
    text-align: center;
    color: #000000;

    display: flex;
    align-items: center;
    justify-content: center;

    #purpleBall{
        margin-bottom: 60px;
        width: 40px;
        height: 40px;
    }

    p{
        width: 50%;
        font-family: 'Clash Display Regular';
        font-size: 19px;
        text-shadow: 0 20px 10px rgba(0,0,0,0.23);
    }

    #purpleSpiral{
        position: relative;
        top: -60px;
        right: 80px;
        width: 90px;
    }

    
`;

const ButtonCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

const Join = styled.button`
    background-color: #232323;
    border: 1px solid #232323;
    border-radius: 65px;
    padding: 16px 25px;
    color: #FFFFFF;
    font-family: 'FontSpring Biennale Medium';
    font-size: 16px;
    box-shadow: 0 12px 10px rgba(0,0,0,0.25);
    cursor: pointer;
    transition: all 0.18s ease-in;

    &:hover{
        opacity: 0.9;
        box-shadow: 0 12px 10px rgba(0,0,0,0.4);
    }
`;

const More = styled.button`
    font-family: 'FontSpring Biennale Medium';
    font-size: 14px;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    line-height: 45px;
    color: #000000;
    cursor: pointer;
    transition: font-weight 0.18s ease-in;

    &:hover{
        font-weight: 600;
    }
`;

export default Container;