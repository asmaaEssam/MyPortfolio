import React from 'react';
import {ContactSection,P} from './style'
import {Header,Line} from '../About/style'
import Form from './Form'
const Contact = () => {
    return ( 
        <ContactSection>
            <Header style={{color:"#fff"}}>Contact<Line style={{borderTop:"3px solid #fff"}}/></Header>
            <P>Have a question or want to work together?</P>
            <Form/>
        </ContactSection>
     );
}
 
export default Contact;