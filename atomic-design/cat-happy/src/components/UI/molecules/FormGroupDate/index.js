import React from 'react';
import { Form } from 'react-bootstrap';
import InputDate from '../../atoms/InputDate';
import Label from '../../atoms/Label';

const FormGroupDate = (props) => (
    <Form.Group controlId={props.controlId}>
        <Label name={props.labelName} className={props.labelClassName}/>
        <InputDate 
            name={props.inputName} 
            placeholder={props.placeholder} 
            className={props.inputClassName} 
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            value={props.value}/>
    </Form.Group>
)

export default FormGroupDate;