import styled from "styled-components";
import AboutImg from '../Images/aboutfull.png'


export default function AboutMe() {
    return (
        <Container>
            <AboutText>
                <h2 id='about'>Om meg</h2>
                <p>
                    Gjennom mitt arbeid med ulike webprosjekter, har jeg lært mye og kommet mye lengre innen frontend-utvikling (JavaScript, React, Redux, HTML, CSS(SCSS), RWD). Jeg er fokusert på videreutvikling i back-end (NodeJS, MERN, MoongoDB, ExpressJS) og er ikke redd for utfordringer. Målet mitt er å bli fullstack-utvikler med tiden.
                </p>
            </AboutText>
            <AoutTwoPart>
                <AboutLeftSide>
                    <img src={AboutImg} alt = 'web developer' />
                </AboutLeftSide>
                <AboutRightSide>
                    <p>
                        Min store lidenskap for koding gjorde at jeg begynte å programmere da jeg gikk på videregående. Jeg har jobbet som IT-konsulent, webutvikler innen hardware og software support også. Jeg har en Associate i computer science og bachelorgrad i computer engineering. Jeg har opparbeidet meg solid kunnskap innen moderne frontend- utvikling og litt backend utvikling og metoder. Min primære tekniske kompetanse ligger i 4 år innenfor JavaScript, HTML5/CSS3 og 3 år innenfor React og Styled component. jeg har litt erfaring om PostgreSQL, Node.js, Express.js og byggeverktøy som Webpack. Jeg har også erfaring med å sette opp nettsider med WordPress og administrere AWS-server og cPanel for flere kunder. 
                        Jeg er på vei til å lære norsk. Jeg studerer b1 nivå i Voksenopplæring Sandvika og nærmere bestått det. Jeg har jobbet i 2 måneder som konsulent i Techpros og nå jobber jeg som frontend-utvikler i Perpendo AS bedrift. 
                        Jeg lærer- og tilpasser meg nye teknologier, domener og miljøer raskt. Jeg er en person som er faglig sterk, nysgjerrig og sulten på å lære mer. Jeg lærer for å finne de beste svar på problemene. Jeg søker og gir tilbakemeldinger, og lærer av både suksess og feil prøver alltid å se en problemstilling fra flere perspektiver. Jeg er initiativrik og resultatorientert med en stor grad av selvstendighet.  Jeg samarbeider godt i team og motiveres av å skape resultater sammen.                     
                    </p>
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
        margin: 0 auto;
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
        line-height: 25px;
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