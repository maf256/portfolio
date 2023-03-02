import styled from "styled-components";
import { Theme } from "./Theme";

export default function Item(variant, size, children, mod) {
    return (
        <ItemComponent>
            {childern}
        </ItemComponent>
    )
}

const ItemComponent = styled.ul` 
    li {
    padding: 0 2vw 0 2vw;
    border: 1px solid rgba(0,0,0,0);  
    /* color: ${({Theme})=> Theme.} */
    :hover {
        background-color: #8D9EFF;
        border: 1px solid #8D9EFF;
        border-radius: 14px 14px 14px 14px;
        transition: background-color 0.7s ease;
   }
}  
    
`



/*
    ul-culomn = display felx = culomn{
        li simple {

        }
        li icon{

        }
        li avatar {

        }
    }
    ul-row = display felx =Row {
         li simple {

        }
        li icon{

        }
        li avatar {

        }
    }
*/
