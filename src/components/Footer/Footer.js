import styled from "styled-components";
import LogoComponent from '../Logo/LogoComponent.js'
import { IoLogoTwitter,IoLogoInstagram, } from "react-icons/io";
import {Phone, Email, FaceBook, Twitter, Linkedin, Github, Whatsapp} from '../Images/svg/Svg'

export default function Footer() {
    let year = new Date().getFullYear();

    return (
        <FooterContainer>
            <Container>
                <LogoFooter>
                    <TitleLogo>
                        <LogoComponent />
                        <h2>Majid</h2>
                    </TitleLogo>
                        <p>But there isn't much literature found in the web about SEO for SVG, which leads us to write this piece to answer these 3 questions:</p>
                        <span> &#169; Copy Right {year}</span>
                </LogoFooter>
                <AddressFooter>
                    <a href="tel:+4740882869"> <Phone fontSize="20px" color='#d6c5c5' margin="0 15px 0 0"/>+47 40882869</a>
                    <a href="mailto:info@sitedesign.no"><Email fontSize="20px" color='#d6c5c5' margin="0 15px 0 0"/>info@Sitedesign.no</a>
                    <a href="https://wa.me/+4740882869"><Whatsapp fontSize="20px" color='#d6c5c5' margin="0 15px 0 0"/> WhatsApp: +47 40882869</a>
                    <a href="https://www.osloweb.no">Firma</a>
                    
                </AddressFooter>
                <SocialFooter>
                    <SocialTop>
                        <a href='https://www.facebook.com/majid.farsangi/'><FaceBook fontSize="35px" color='#d6c5c5' margin="18px"/></a>
                        <a href='https://twitter.com/askarifarsangi'><Twitter fontSize="35px" color='#d6c5c5' margin="18px"/></a>
                    </SocialTop>
                    <SocialDown>
                        <a href='https://www.linkedin.com/in/farsangi'><Linkedin fontSize="35px" color='#d6c5c5' margin="18px"/></a>
                        <a href='https://github.com/maf256'><Github fontSize="35px" color='#d6c5c5' margin="18px"/></a>
                    </SocialDown>
                    
                    
                    
                 
                </SocialFooter>
            </Container>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    /* height: 300px; */
    background-color: #0A2640;
    
    `
const Container = styled.div`
    display: grid;   
    grid-template-columns: 55fr 25fr 20fr;
    grid-gap: 50px;

`
const LogoFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
    gap: 1rem;
    p, span {
        color: #d6c5c5;
        padding: 15px;
        width: 80%;
    }
    p {
        text-align: justify;
        line-height: 30px;
        font-size: 18px;
        font-weight: 500;
    }
    span {
        text-align: center;
    }
    

`

const TitleLogo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    h2 {
        font-size: 22px;
        color: #d6c5c5;
        padding: 10px 7px;
        letter-spacing: 3px;
    }
`
const AddressFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
    a {
        text-decoration: none;
        color: #d6c5c5;
        padding-left: 15px; 
        font-size: 18px;
        font-weight: 500;
        
        :hover {
            background-color: #142d4c;
            color: white;
        }
    }
`
const SocialFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 30px;
    a {
        :hover {
            background-color: #142d4c;
            svg {
                color: white;
            }
        }
    }
`
const SocialTop = styled.div`
    display: flex;
    flex-direction: row;
`

const SocialDown = styled.div`
    display: flex;
    flex-direction: row;
`