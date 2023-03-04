import styled from "styled-components";
import LogoImg from '../Images/logo.png'

export default function LogoComponent() {
    return(
        <Logo href="#home">
            <img src={LogoImg} alt='webutvikler'></img>
        </Logo>
    )
}

const Logo = styled.a`
    img {
        transition: all 0.5s ease-in-out;      
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