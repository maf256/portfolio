import styled from "styled-components";
import LogoComponent from '../Logo/LogoComponent.js'
import { IoLogoTwitter,IoLogoInstagram, } from "react-icons/io";
import {Phone, Email, FaceBook, Twitter, Linkedin, Github} from '../Images/svg/Svg'

export default function Footer() {
    return (
        <FooterContainer>
            <Container>
                <LogoFooter>
                    <TitleLogo>
                        <LogoComponent />
                        <h2>Majid</h2>
                    </TitleLogo>
                        <p>But there isn't much literature found in the web about SEO for SVG, which leads us to write this piece to answer these 3 questions:</p>
                        <span>&copy</span>
                </LogoFooter>
                <AddressFooter>
                    <a href="tel:+4740882869"> <Phone fontSize="20px" color='red'/>+47 40882869</a>
                    <a href="mailto:info@sitedesign.no"><Email fontSize="20px" color='red'/>info@Sitedesign.no</a>
                    <a href="https://wa.me/+4740882869">Whatsapp: +47 40882869</a>
                    <a href="https://www.osloweb.no">Firma</a>
                    
                </AddressFooter>
                <SocialFooter>
                    <FaceBook fontSize="20px" color='red'/>
                    <Twitter fontSize="20px" color='red'/>
                    <Linkedin fontSize="20px" color='red'/>
                    <Github fontSize="20px" color='red'/>
                </SocialFooter>
            </Container>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 300px;
    background-color: #0A2640;
    
    `
const Container = styled.div`
    display: grid;   
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

`
const LogoFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
`

const TitleLogo = styled.div`
    display: flex;
    flex-direction: row;
`
const AddressFooter = styled.div`
    display: flex;
    flex-direction: column;
`
const SocialFooter = styled.div`

`