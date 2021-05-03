import React from 'react';
import { Form } from 'react-bootstrap';
import Select from '../../atoms/Select';
import Label from '../../atoms/Label';

const FormGroupSelect = (props) => 
    <Form.Group controlId={props.controlId}>
        <Label name={props.labelName} className={props.labelClassName}/>
        <Select 
            name={props.inputName} 
            options={props.options} 
            className={props.inputClassName} 
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            value={props.value}/>
    </Form.Group>

export default FormGroupSelect;