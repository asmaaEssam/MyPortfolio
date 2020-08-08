import React from 'react';
import {FooterStyle,IconSection} from './style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return ( 
        <FooterStyle>
            <IconSection><FontAwesomeIcon style={{color:'#fff'}} icon={faLinkedin} /></IconSection>
            <IconSection><FontAwesomeIcon style={{color:'#fff'}} icon={faGithub} /></IconSection>
        </FooterStyle>
     );
}
 
export default Footer;