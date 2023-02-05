import React from 'react'
import styled from 'styled-components'
import Logo from './Images/logo.png'


export const Navbar = () => {
  return (
    <Nav>
        <img src={Logo} />
        <Menu>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </Menu>
    </Nav>
  )
}

const Nav = styled.nav `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
    
    img {
        width: 50px;
        height: 50px;
    }

`
const Menu = styled.ul`
   display: flex;
   flex-direction: row;
   list-style: none;
   font-weight: 500;
   font-size: 18px;
   li {
    padding: 0 2vw 0 2vw;
    border: 1px solid rgba(0,0,0,0);
    :hover {
        background-color: gray;
        border: 1px solid gray;
        border-radius: 14px 14px 14px 14px;
    }

   }
   a {
    text-decoration: none;
    color: black; 
   }
`
