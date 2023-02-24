import styled from "styled-components"
import { Theme } from "./Theme"

export default function List(variant, size, children, src) {
    return (
        <LiComponent>
            <a href={src}></a>
            {children}
        </LiComponent>
    )
}



const LiComponent = styled.li`
    padding: 0 2vw 0 2vw;
    border: 1px solid rgba(0,0,0,0);    
    :hover {
        background-color: #8D9EFF;
        border: 1px solid #8D9EFF;
        border-radius: 14px 14px 14px 14px;
        transition: background-color 0.7s ease;
    }
    a {
    text-decoration: none;
    color: white;
    font-weight: 600;
   }
`
