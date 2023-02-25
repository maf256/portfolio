import styled from "styled-components";
import { useState } from "react";

export default function Skills() {


    
    
    const skills = [
        {  
            title: "Prosjekter",
            detail: "– AVIOR Prosjekt (Private, Frontend, Next.js / Styledcomponents) / SITEDESIGN Prosjekt (Private, Frontend, React Styled-components)/ Eurobazzar.com / Persiarestaurant.no / Apameshop.no "
        },
        {
            title: "NØKKELKOMPETANSE",
            detail: "HTML, CSS, JavaScript, React, Styled-components , PostgreSQL, Node.js, Express.js, Webpack, C++ , WordPress ,Shopify , cPanel."
        },
        {
            title: "UTDANNING",
            detail: `Master in Business strategic,
             Bachelor in Computer engineering, 
              Associate in Computer Science`
        },
        {
            title: "SPRÅK",
            detail: "Norwegian,English, Persian"
        },
        {
            title: "PERSONLIG",
            detail: "Jeg er en hardtarbeidende utvikler med lang erfaring fra programing og IT-støtte. Gjennom veiledning av teamhar jeg oppnådd dokumenterbare resultater for økt kunnskap og effektivitet i forskjellige software- og ITsystemer. Jeg er lett å komme i kontakt med og er en intuitiv formidler som bidrar til effektivt tverrkultureltsamarbeid."
        }
    ]
    
    
    
    
    const [curSkill, setCurSkill] = useState(0)

    return (
        <Container>
            <h1 id="skills">Skills</h1>
            <ListSkills >
               {
                skills.map((skill , index)  => {
                    return (
                    <Item curli={curSkill==index} onClick={() => {setCurSkill(index)}} key={index}>{skill.title}</Item>
                    )
                })
               }
            </ListSkills>
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
    }
     @media (max-width: 1400px) {
       h1{
        font-size: 30px; 
        } 
     }
     @media (max-width: 1200px) {
       h1{
        font-size: 20px; 
        } 
     }
`

const ListSkills = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom:15px;
    padding-top: 30px;
    flex-wrap: wrap;
    cursor: pointer;
    

    @media (max-width: 1400px) {
      
        li {
            font-size: 18px;
            font-weight: 500;
            margin: 5px;
        }
        
    }
    @media (max-width: 1300px) {
      
      li {
          font-size: 12px;
          font-weight: 700;
          margin: 0px;

      }
      @media (max-width: 768px) {
      
      li {
        width: 100%;
      }
      
  }
}
`
const Item = styled.li`
        transition: all 0.3s  ease-in;
        :hover {
            background: #0A2640;
            color: white;
            border-radius: 50px;
        }
        /* background-color: ${({ curli }) => curli ? 'blue' : 'white'}; */
                
        padding: 10px;
        margin: 10px;
        list-style: none;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 2px;
        flex-wrap: nowrap;
        min-width: 150px;
        text-align: center;
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
