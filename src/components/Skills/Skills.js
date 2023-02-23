import styled from "styled-components";
import { useState } from "react";

export default function Skills() {

    const skills = [
        {  
            title: "Web Development",
            detail: "HTML, CSS3, SASS (SCSS), JavaScript (ES5, ES6), jQuery, RWD, React.js, React router, Flexbox, Bootstrap, Node.js, Webpack, Redux, Express.js, MERN, MongoDB, Mongoose, Angular (basics)"
        },
        {
            title: "Project Maneging",
            detail: "Git, GitHub, BitBucket, Agile, Scrum, Jira, Trello"
        },
        {
            title: "Language",
            detail: "Norwegian, English, Polish"
        },
        {
            title: "Personal",
            detail: "Good communication with other people regardless of background. Appreciate honesty, loyalty and responsibility. Good interpersonal skills. Well organized, maintains order in the workplace."
        },
        {
            title: "Other",
            detail: "Linux OS; both use and basic administration (based on Debian)."
        },
    ]
    const [curSkill, setCurSkill] = useState(0)

    return (
        <Container>
            <h1>Skills</h1>
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
