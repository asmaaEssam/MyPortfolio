import React from 'react';
import {NavbarStyle,Item} from './style'
const Navbar = () => {
    return ( 
        <NavbarStyle>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Portfolio</Item>
            <Item>Blog</Item>
            <Item>Contact</Item>
        </NavbarStyle>
     );
}
 
export default Navbar;