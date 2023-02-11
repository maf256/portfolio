import React from 'react'
import styled from 'styled-components'
import Logo from '../Images/logo.png'
import Berger from './berger.js'


export const Navbar = () => {

  return (
    <Nav >
        <img src={Logo} alt="logo"/>
        <Berger />        
    </Nav>
  )
}

const Nav = styled.nav `

    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
    margin-top: 20px;   
    background-color: #0A2640;
    img {
        width: 50px;
        height: 50px;
    }
`
