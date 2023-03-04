import styled from "styled-components";
import { useState } from "react";
import { Data } from "../common/Data";

export default function Skills() {
    
    const [curSkill, setCurSkill] = useState(0)
    return (
        <Container>
            <h1 id="skills">Ferdigheter</h1>
            <Ul >
               {
                Data.skills.map((skill , index)  => {
                    return (
                    <Item curli={curSkill==index} onClick={() => {setCurSkill(index)}} key={index}>{skill.titleNorsk}</Item>
                    )
                })
               }
            </Ul>
            <Discreaption >
               {Data.skills[curSkill].detailNorsk}
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
  flex-flow: row wrap;  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`

const Item = styled.li`
    padding: 0 2vw 0 2vw;
    margin: 3px;
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
    margin-top: 1.5rem;
    border: 1px solid;
    padding: 10px;
    transition: all 1s ease-in-out;
    box-shadow: 5px 10px 8px 10px #888888;
    @media (max-width: 1400px) {
        font-size: 12px;
        font-weight: 500;
        text-align: justify;
    }
`
