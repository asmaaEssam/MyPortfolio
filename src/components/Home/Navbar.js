import React from 'react';
import {NavbarStyle,Item} from './style'
const Navbar = ({ sticky }) => {
    return ( 
        <NavbarStyle style={{ position: sticky? 'fixed': '',
            top: sticky? '0': '',
            animation: sticky? "moveDown 0.5s ease-in-out": ""}}>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Portfolio</Item>
            <Item>Contact</Item>
        </NavbarStyle>
     );
}
 
export default Navbar;