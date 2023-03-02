import styled from "styled-components";
import { useState } from "react";

export default function Skills() {

    
    const skills = [
        {
            title: "WEBUTVIKLER",
            detail: "HTML, CSS, JavaScript, React, Styled-components, PostgreSQL, Node.js, Express.js, Webpack, C++, WordPress, cPanel."
        },
        {  
            title: "ProsjektSTYRING",
            detail: "Git, GitHub, Agile, Scrum, Jira, Trello"
        },
    
        {
            title: "UTDANNING",
            detail: "Master in Business strategic 2013– 2015 , Bachelor in Computer engineering 2011 – 2013 , Associate in Computer Science 2001 – 2004"
        },
        {
            title: "SPRÅK",
            detail: "Norwegian B1, English A2, Persian Morsmål"
        },
        {
            title: "PERSONLIGE",
            detail: "Jeg er en hardtarbeidende utvikler med lang erfaring fra programing og IT-støtte. Gjennom veiledning av team har jeg oppnådd dokumenterbare resultater for økt kunnskap og effektivitet i forskjellige software- og IT systemer. Jeg er lett å komme i kontakt med og er en intuitiv formidler som bidrar til effektivt tverrkulturelt samarbeid."
        },
    
    ]
    
    
    const [curSkill, setCurSkill] = useState(0)

    return (
        <Container>
            <h1 id="skills">Ferdigheter</h1>
            <Ul >
               {
                skills.map((skill , index)  => {
                    return (
                    <Item curli={curSkill==index} onClick={() => {setCurSkill(index)}} key={index}>{skill.title}</Item>
                    )
                })
               }
            </Ul>
            <Discreaption >
               {skills[curSkill].detail}
            </Discreaption>
        </Container>
    )
}



const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0 40px 0;
    h1 {
        font-size: 50px;
        font-weight: 500;
        letter-spacing: 5px;
        color: black;
        text-align: center;
        margin-bottom: 1.5rem;
    }
     @media (max-width: 1400px) {
       h1{
        font-size: 30px; 
        } 
     }
     @media (max-width: 1200px) {
       h1{
        font-size: 30px; 
        } 
     }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`

const Item = styled.li`
    padding: 0 2vw 0 2vw;
    font-size :  1.25rem;
    border: 1px solid  ${({ curli }) => curli ? '#0A2640' : 'white'}; 
    border-radius: 14px 14px 14px 14px;
    background-color: ${({ curli }) => curli ? '#0A2640' : 'white'};
    color: ${({ curli }) => curli ? 'white' : 'black'};
    min-width: 200px;
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
        font-weight: 600;
   }
    :hover {
        background-color: #8D9EFF;
        border: 1px solid #8D9EFF;
        border-radius: 14px 14px 14px 14px;
        transition: background-color 0.7s ease;
    }
`
const Discreaption = styled.p`
    text-align: center;
    width: 65%;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 1400px) {
        font-size: 12px;
        font-weight: 500;
        text-align: justify;
    }
`
