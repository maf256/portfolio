import React from 'react';
import styled from 'styled-components';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
    </Ul>
  )
}

export default RightNav

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;  
  li {
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
    }
    a {
      color: ${({ open }) => open ? '#FFE9B1' : "#112B3C"}; 
    }
  }
`;