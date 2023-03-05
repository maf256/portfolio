import styled from "styled-components";
import HeaderSvgTop from "./HeaderSvgTop";
import Button from "../common/Button"
import { Data } from "../common/Data";

export default function Header({selectedLanguage}) {
    return (
        <HeaderSection id='home'>
            <LeftSide>
                <TitleLeft>{Data.header[selectedLanguage].subject}</TitleLeft>
                <Pragraph>{Data.header[selectedLanguage].detail}</Pragraph>
                <ButtonLeft>
                    <Button variant="primary" size="medium"><a href='#contact'>kontakt meg</a></Button>
                </ButtonLeft>
            </LeftSide>
            <RightSide>
                <HeaderOneSvg>
                    <HeaderSvgTop fontSize="200px" />
                </HeaderOneSvg>
                {/* <HeaderTwoSvg>
                    <HeaderSvgLeft />
                    <HeaderSvgRight />
                </HeaderTwoSvg> */}
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
    `

const LeftSide = styled.div`
    width: 50%;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const TitleLeft = styled.h1`
    font-size: 25px;
    font-weight: 600;
    color: #d6c5c5;
    letter-spacing: 3px;
    margin: 20px;
`
const Pragraph = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: #d6c5c5;
    letter-spacing: 1px;
    margin: 15px;
`

const ButtonLeft = styled.div`
    margin: 0 auto;
    a {
        text-decoration: none;
        color: white;
        font-weight: 600;
    }
`

const RightSide = styled.div`
    width: 50%;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`
const HeaderOneSvg = styled.div`
    width: 50%;
   
`
 

// const HeaderTwoSvg = styled.div`
//     width: 50%;
//    display: flex;
//    flex-direction: row;
//    justify-content: center;
//    align-items: center;
   
//    svg {
//     width: 350px;
//     height: auto;
//    }
// `

