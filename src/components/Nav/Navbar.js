import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../Logo/LogoComponent.js'
import Berger from './berger.js'
import Language from '../language/Language.js'

export const Navbar = () => {

  return (
    <Nav >
        <LogoComponent />

        <Berger />        
    </Nav>
  )
}

const Nav = styled.nav `
    width: 100%;
    height: 100px;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
    padding-top: 20px;   
    background-color: #0a26407a;
    position: fixed;
`