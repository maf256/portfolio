import React from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import Language from '../language/Language';


const RightNav = ({ open,selectedLanguage, setSelectedLanguage}) => {
  return (
    
    <Ul open={open}>
    {
      Data.menu[selectedLanguage].map((item, inx) =>
      <li key={inx}><a href={item.href}>{item.name}</a></li>
      )
    }
      <li><Language setSelectedLanguage={setSelectedLanguage}/></li>
    </Ul>
  )
}

export default RightNav

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;  
  li {
    select {
      appearance: none;
      background-color: transparent;
      border: none;
      width: 100%;
      cursor: inherit;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;   
      color: white;
    }
    padding: 0 2vw 0 2vw;
    border: 1px solid rgba(0,0,0,0);    
    :hover {
        background-color: #8D9EFF;
        border: 1px solid #8D9EFF;
        border-radius: 14px 14px 14px 14px;
        transition: background-color 0.7s ease;
    }
   }
   a {
    text-decoration: none;
    color: white;
    font-weight: 600;
   }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      select {
        color: #FFE9B1;
      }
    }
    a {
      color: ${({ open }) => open ? '#FFE9B1' : "#112B3C"}; 
    }
  }
`;