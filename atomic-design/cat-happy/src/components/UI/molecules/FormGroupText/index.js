import React from 'react';
import { Form } from 'react-bootstrap';
import InputText from '../../atoms/InputText';
import Label from '../../atoms/Label';

const FormGroupText = (props) => {

    return (
    <Form.Group controlId={props.controlId}>
        <Label name={props.labelName} className={props.labelClassName}/>
        <InputText 
            name={props.inputName} 
            type={props.type} 
            placeholder={props.placeholder} 
            className={props.inputClassName}
            onChange={props.onChange}
            value={props.value}/>
    </Form.Group>
)
}
    

export default FormGroupText;