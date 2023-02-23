import styled from "styled-components";
import LogoComponent from '../Logo/LogoComponent.js'
import {Phone, Email, FaceBook, Twitter, Linkedin, Github, Whatsapp} from '../Images/svg/Svg'

export default function Footer() {
    let year = new Date().getFullYear();

    return (
        // <FooterContainer>
            <Container>
                <LogoFooter>
                    <TitleLogo>
                        <LogoComponent />
                        <h2>Majid</h2>
                    </TitleLogo>
                        <p>But there isn't much literature found in the web about SEO for SVG, which leads us to write this piece to answer these 3 questions:</p>
                        <span> &#169; Copy Right {year}</span>
                </LogoFooter>
                <AddressFooter className="contact">
                    <a  href="tel:+4740882869"> <Phone fontSize="20px" color='#d6c5c5' margin="0 15px 0 0"/>+47 40882869</a>
                    <a  href="mailto:info@sitedesign.no"><Email fontSize="20px" color='#d6c5c5' margin="0 15px 0 0"/>info@Sitedesign.no</a>
                    <a  href="https://wa.me/+4740882869"><Whatsapp fontSize="20px" color='#d6c5c5' margin="0 15px 0 0"/> +47 40882869</a>
                    <a  href="https://www.osloweb.no">Firma</a>
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
                        <h4> &#169; Copy Right {year}</h4>
            </Container>
        // </FooterContainer>
    )
}

// const FooterContainer = styled.footer`
//     /* height: 300px; */
    
//     `
const Container = styled.div`
    display: grid;   
    grid-template-columns: 55fr 25fr 20fr;
    grid-gap: 50px;
    width: 100%;
    background-color: #0A2640;
    h4 {
        display: none;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 40fr 30fr 30fr;
        grid-gap: 30px;
        div  p {
        padding: 0;
        width: 80%;
        font-size: 12px;
        }
        div span {
            font-size: 13px;
        }
        div a {
            font-size: 14px;
        }
        div {
            gap: 10px;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap:0;
        p {
            display: none;
        }
        div a {
            justify-content: left;
            text-align: center;
        }
        div span {
            /* font-size: 20px; */
            display: none;
        }
        div a {
            font-size: 16px;
        }
        div {
            gap: 2px;
        }
        h4 {
            display: block;
            text-align: center;
            color: #d6c5c5;
        }
        .contact {
            width: 209px;
            margin: 0 auto;
            a {
                text-align: left;
            }
        }
       
    }
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
    align-items: center;
    gap: 30px;
    a {
        :hover {
            background-color: #142d4c;
            svg {
                color: white;
            }
        }
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
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


