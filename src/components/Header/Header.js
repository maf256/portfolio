import styled from "styled-components";
// import Owner from "../Images/Majid2.png"
// import HeaderImgTop from "../Images/header1.svg"
import HeaderSvgTop from "./HeaderSvgTop";
import HeaderSvgLeft from "./HeaderSvgLeft";
import  HeaderSvgRight  from "./HeaderSvgRight";
import Button from "../common/Button"

export default function Header() {
    return (
        <HeaderSection>
            <LeftSide>
                <TitleLeft>Majid Askarifarsangi <br/> Oslo WEb </TitleLeft>
                <Pragraph>
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                </Pragraph>
                <ButtonLeft>
                    <Button variant="primary">Vis prosjekter</Button>
                    <Button variant="secondary">Majid</Button>
                </ButtonLeft>
            </LeftSide>
            <RightSide>
                <HeaderOneSvg>
                    <HeaderSvgTop fontSize="500px" />
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
    
    /* overflow-wrap: break-word; */
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
// desktop land - portrate
// tablet land - prot



const TitleLeft = styled.h1`
    font-size: 25px;
    font-weight: 600;
    color: #d6c5c5;
    /* #e3d5d */
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

