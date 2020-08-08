import React from 'react';
import {FormStyle,Input,Textarea,Button} from './style'
const Form = () => {
    return ( 
        <FormStyle>
            <Input type='text' placeholder='Name' />
            <Input type='text' placeholder='Entar email' />
            <Textarea type='text-area' placeholder='Your message' />
            <Button>Submit</Button>
        </FormStyle>
     );
}
 
export default Form;