import styled from "styled-components";
import HeaderSvgTop from "./HeaderSvgTop";
import Button from "../common/Button"

export default function Header() {
    return (
        <HeaderSection>
            <LeftSide>
                <TitleLeft>Majid Askarifarsangi</TitleLeft>
                <Pragraph>En frontend-utvikler</Pragraph>
                <ButtonLeft>
                    <Button variant="primary" size="l">Vis prosjekter</Button>
                    <Button variant="secondary" size="m">kontakt meg</Button>
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
    padding-top: 40px;
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

