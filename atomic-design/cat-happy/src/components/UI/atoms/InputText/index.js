import React from 'react';
import { Form } from 'react-bootstrap';

const InputText = (props) =>
    <Form.Control type={props.type} placeholder={props.placeholder} className={props.className} name={props.name} value={props.value} onChange={props.onChange}/>

InputText.defaultProps = {
    type: 'text'
}

export default InputText;