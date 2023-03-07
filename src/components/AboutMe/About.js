import styled from "styled-components";
import AboutImg from '../Images/aboutfull.png'
import { Data } from "../common/Data";

export default function AboutMe({selectedLanguage}) {
    return (
        <Container>
            <AboutText>
                <h2 id='about'>{Data.About[selectedLanguage].subject}</h2>
                <p>{Data.About[selectedLanguage].p}</p>
            </AboutText>
            <AoutTwoPart>
                <AboutLeftSide>
                    <img src={AboutImg} alt = 'web developer' />
                </AboutLeftSide>
                <AboutRightSide>
                    <p>{Data.About[selectedLanguage].detail}</p>
                </AboutRightSide>
            </AoutTwoPart>
        </Container>

    )
}

const Container = styled.section`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
`

const AboutText = styled.div`
    text-align: center;
    width: 100%;
    padding-bottom: 40px;
    h2 {
        font-size: 30px;
    }
    p {
        margin: 15px auto;
        width: 70%;
    }
    @media (max-width:1300px) {
       h2{
         font-size: 22px;
       } 
       p {
            font-size: 14px;
            text-align: justify;
       }
    }
`

const AoutTwoPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width:1300px){
        flex-direction: column;
    }
`
const AboutLeftSide = styled.div`

    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 85%;
        height: auto;
        border-radius: 10px;
    }

    @media (max-width:1300px) {
        width: 100%;

       img{
          width: 100%;
          padding: 15px 0;
       } 
    }
`

const AboutRightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 0 5%;
    text-align: center;
    h3 {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 2px;
        padding-bottom:15px;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        line-height: 30px;
    }
    @media (max-width:1300px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 5px 50px;
        h3 {
            font-size: 18px;
            font-weight: 600;
        }
        p {
            font-size: 13px;
            line-height: 20px;
        }
    }
`