import styled from "styled-components";
import Logo from '../Images/logo.png'

export default function LogoComponent() {
    return(
        <a href="#home">
            <Img src={Logo}></Img>
        </a>
    )
}

const Img = styled.img`
    transition: all 0.5s ease-in-out;      
    width: 50px;
    height: 50px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(350deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } } 

    
`