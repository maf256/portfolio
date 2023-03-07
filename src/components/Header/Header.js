import styled from "styled-components";
import HeaderSvgTop from "../Images/Majid2.png";
import Button from "../common/Button"
import { Data } from "../common/Data";
import {Coffee} from '../Images/svg/Svg'

export default function Header({selectedLanguage}) {
    return (
        <HeaderSection id='home'>
            <LeftSide>
                <h1>{Data.header[selectedLanguage].subject}</h1>
                <h2>{Data.header[selectedLanguage].detail}</h2>
                <h3> {Data.header[selectedLanguage].name}<Coffee fontSize="45px" color='#7f6666' margin="18px"/> </h3>
                <ButtonLeft>
                    <Button variant="primary" size="medium"><a href='#contact'>kontakt meg</a></Button>
                </ButtonLeft>
            </LeftSide>
            <RightSide>
                <HeaderOneSvg>
                    <img src={HeaderSvgTop} alt='webutvikler'></img>
                </HeaderOneSvg>
            </RightSide>
        </HeaderSection>
    )
}


const HeaderSection = styled.header`
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 120px;
    background-color: #0A2640;
    div {
        width: 50%;
        max-width: 100vw;
        
        h1,h2,h3 {
            font-weight: 600;
            letter-spacing: 1.5px;
            display: flex;
            align-items: center;
            margin: 7px 0px;
            max-width: 100vw;
            
        }
        h1 {
            color: #ffffff;
        }
        h2 {
            color: #d6c5c5;
        }
        h3 {
            color: #ab9b9b;
        }
    }
    @media (max-width: 780px) {
        div {
            width: 100%
        }
        h1 {
            font-size: 1.5em;

        }
        h2 {
            font-size: 1.2em;

        }
        h3 {
            font-size: 1em;

        }
    }
    `

const LeftSide = styled.div`
    /* width: 50%; */
    min-width: 320px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    @media (max-width: 768px) {
        padding-left: 4%;
    }
`

const ButtonLeft = styled.div`
    /* margin: 0 auto; */
    max-width: 100vw;
    
    a {
        text-decoration: none;
        color: white;
        font-weight: 600;
    }
`

const RightSide = styled.div`
    min-width: 320px;
    max-width: 100vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: auto;
        max-width: 100%;
    }
   
`
const HeaderOneSvg = styled.div`
    width: 50%;
   
`
 