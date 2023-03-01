import styled from "styled-components";
import { Theme } from "./Theme"

// variant => primary/secondary
// size => small/medium/large

export default function Button({ variant, size, children }) {
    return (
        <ButtonComponent variant={variant} size={size} >
            {children}
        </ButtonComponent>
    )
}

const ButtonComponent = styled.button`
    width: ${({size}) => Theme.Size[size].width};
    height: 45px;
    border: 2px solid black;
    border-radius: 50px;
    margin: 20px;
    background-color: ${({variant})=> Theme.Button[variant].backgroundColor};
    color: ${({variant}) => Theme.Button[variant].color};
    color:
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    
`