import React from 'react'
import styled from 'styled-components'
import Logo from './Images/logo.png'
import Berger from '../components/Nav/berger.js'


export const Navbar = () => {

    // const [hamberger, setHamberger] = useState(false)

  return (
    <Nav >
     {/* <Nav ham={hamberger}> */}
        <img src={Logo} alt="logo"/>
        {/* <Menu >
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </Menu> */}
        <Berger />

        {/* <Humberger onClick={()=> setHamberger(!hamberger)} >
            {
                hamberger ? <RxCross1 /> : <RxHamburgerMenu />
            }            
        </Humberger> */}
        
        
        
    </Nav>
  )
}

const Nav = styled.nav `

    /* @media (max-width: 960px) {
        ul {
            ${(ham) => ham ? "display: none;" : "display: flex;flex-direction: column;justify-content: center;align-content: center;"};

            
        }

        span {
            display: block;
        }
    } */
    /* @media (min-width: 768px) {
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            font-weight: 500;
            font-size: 18px;                    
        }
        span {
            display: none;
        }
    } */
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
    margin-top: 20px;      
    img {
        width: 50px;
        height: 50px;
    }
`
// const Menu = styled.ul`
//    li {
//     padding: 0 2vw 0 2vw;
//     border: 1px solid rgba(0,0,0,0);
//     :hover {
//         background-color: #bbe4e9;
//         border: 1px solid #bbe4e9;
//         border-radius: 14px 14px 14px 14px;
//         transition: background-color 0.7s ease;
//     }

//    }
//    a {
//     text-decoration: none;
//     color: black; 
//    }


// `

// const Humberger = styled.span `
//     font-size: 21px;

// `





// import React from 'react';
// import styled from 'styled-components';
// import Burger from './Burger';

// const Nav = styled.nav`
//   width: 100%;
//   height: 55px;
//   border-bottom: 2px solid #f1f1f1;
//   padding: 0 20px;
//   display: flex;
//   justify-content: space-between;

//   .logo {
//     padding: 15px 0;
//   }
// `

// const Navbar = () => {
//   return (
//     <Nav>
//       <div className="logo">
//         Nav Bar
//       </div>
//       <Burger />
//     </Nav>
//   )
// }

// export default Navbar














