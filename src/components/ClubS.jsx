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

const ClubS = (props) => {
  return (
    <>
        <GlobalStyle/>
            <AllCont>
                <UpCont>
                    <h1>Clubs</h1>
                </UpCont>

                <LowCont>
                    <WritCont>
                        <GoogleLogo>
                          <span className='letter g'>G</span>
                          <span className='letter d'>D</span>
                          <span className='letter s'>S</span>
                          <span className='letter c'>C</span>  
                        </GoogleLogo>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labolLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore etre et
                        </p>
                    <SocialCont>
                    <p>Socials:</p>
                    <Icons>
                        <img src="/images/Linkedin.svg" alt="Linkedin"/>
                        <img src="/images/Instagram.svg" alt="Instagram"/>
                        <img src="/images/Twitter.svg" alt="Twitter"/>
                        </Icons>
                    </SocialCont> 
                        
                    </WritCont>
                    <MainImg>
                      <img src="/images/ClubLogo.svg" alt="ClubLogo"/>
                    </MainImg> 
                                       
                </LowCont>
            </AllCont>

    </>
  );
};


const AllCont = styled.div`
    ${'' /* background-color: yellow; */}
    width: 100%;
    margin-top: 90px;
    padding: 0 20px; 
`;

const UpCont = styled.div`
display:flex;
justify-content:center;
    ${'' /* background-color: grey; */}
    h1{
      font-family: FONTSPRING DEMO - Biennale Bold;
font-size: 40px;
font-weight: 700;
line-height: 134.34px;
text-align: left;

    }
`;

const SocialCont = styled.div`
${'' /* background-color:yellow; */}

`;

const Icons = styled.div`
  margin-top: 20px;
  ${'' /* background-color:orange; */}
  display: flex;
  justify-content:center;

  img{
    margin-right: 20px;
    height: 43px;
    width: 43px;
  }
`;

const LowCont = styled.div`
    ${'' /* background-color: pink; */}
    display: flex;
    flex-direction: column; 
    width: 100%;
    height: 100%; 
  display: grid;
  grid-template-columns: 1fr 1fr; 


`;

const WritCont = styled.div`
  ${'' /* background-color: purple; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;


  p{
    text-align: center; 
    margin-top: 20px;
    font-family: 'Clash Display Regular';
    font-size: 20px;
  }
`;
const GoogleLogo = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 50px;
font-family: 'Roboto', sans-serif;
font-weight: Bold;
text-transform: uppercase;
font-size: 40px;

.g,.d,.s,.c{
display: inline-block;
${'' /* width: 30px; */}
${'' /* height: 30px; */}
${'' /* line-height: 30px; */}
text-align: center;
border-radius: 50%;
margin: 0 1px;

}
.g{
  color: #ea4335;
}
.d{
  color: #4285f4;
}
.s{
  color: #f5c542;
}
.c{
  color: #6cb863;
}

`;


const MainImg = styled.div`
  ${'' /* background-color: green; */}
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    max-width: 100%; 
    height: auto;
    border-radius: 50px;
    border: 4px;
    opacity: 0px;
    background: #000000;
  }
`;

export default ClubS;
