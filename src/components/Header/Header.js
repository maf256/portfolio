import styled from "styled-components";
// import Owner from "../Images/Majid2.png"
// import HeaderImgTop from "../Images/header1.svg"
import HeaderSvgTop from "./HeaderSvgTop";
import HeaderSvgLeft from "./HeaderSvgLeft";
import  HeaderSvgRight  from "./HeaderSvgRight";

export default function Header() {
    return (
        <HeaderSection>
            <LeftSide>
                <TitleLeft>Majid Askarifarsangi <br/> Oslo WEb </TitleLeft>
                <Pragraph>
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                </Pragraph>
                <ButtonLeft>
                    <Button color= "#d6c5c5" BgColor= "#2DCDDF">Vis prosjekter</Button>
                    <Button color= "#d6c5c5" BgColor= "rgba(45, 205, 223, 0.25%)">Majid</Button>
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
const Button = styled.button`
    width: 160px;
    height: 45px;
    border: 2px solid black;
    border-radius: 50px;
    /* padding: 20px; */
    margin: 20px;
    background-color: ${({BgColor})=> BgColor};
    color: ${({color}) => color};
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    
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

