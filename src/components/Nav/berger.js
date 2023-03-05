import styled from "styled-components"
import { useState } from "react"
import RightNav from "./rightNav"

export default function Berger({selectedLanguage, setSelectedLanguage}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBerger open={open} onClick={() => setOpen(!open) }>
                <div></div>
                <div></div>
                <div></div>
            </StyledBerger>
            <RightNav selectedLanguage={selectedLanguage} open={open} setSelectedLanguage={setSelectedLanguage}/> 
        </>
    )
}

const StyledBerger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: none;
    z-index: 100;
    cursor: pointer;

    @media (max-width:768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column  nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: black;
        border-radius: 10px;
            
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }        
    }

`
