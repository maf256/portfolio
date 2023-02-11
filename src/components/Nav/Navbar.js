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
    padding-top: 20px;   
    background-color: #0A2640;
    img {
        width: 50px;
        height: 50px;
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
        @-moz-keyframes spin { 100% { -moz-transform: rotate(350deg); } }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
        @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }  
    }
`
