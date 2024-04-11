import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMObiennaleMedium from "/fonts/Fontspring-DEMO-biennale-medium.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FontSpring Biennale Medium';
    src: url(${FontspringDEMObiennaleMedium}) format('opentype');
  }
`;

const ToggleSwitch = (props) => {

    return(
        <>
            <GlobalStyle />
            <SwitchCont>
                <label>
                    <input type="checkbox"></input>
                    <span>
                        <p id="insideSwitch">Lorem, ipsum.</p>
                        <img src="/images/emojiSwitch.png" alt="" />
                    </span>
                </label>
            </SwitchCont>
        </>
    );
};

const SwitchCont = styled.div`
    label {
        position: relative;
        display: inline-block;
        width: 9rem;
        height: 2.6rem;
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E4F2FF;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        border-radius: 34px;
        transition: background-color 0.4s;
    }

    input:checked + span {
        background-color: #2196f3;
    }

    p{
        position: relative;
        /* left: -20px; */
        margin-top: 11px;
        margin-right: 30px;
        font-family: 'FontSpring Biennale Medium';
        font-size: 12px;
        text-align: center;
    }

    span:before {
        position: absolute;
        content: "";
        height: 3.1rem;
        width: 3.1rem;
        left: 103px;
        bottom: -4px;
        background-color: #75BDFF;
        border-bottom: 2px solid #ECECEC;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        border-radius: 50%;
        transition: transform 0.4s;
    }

    input:checked + span:before{
        transform: translateX(-106px);
    }

    img{
        position: absolute;
        height: 2rem;
        left: 112px;
        bottom: 6px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0,0,0,0.4);
        transition: transform 0.4s;
    }

    input:checked + span img{
        transform: translateX(-106px);
    }
`;

export default ToggleSwitch;