import React from 'react';
import { Form } from 'react-bootstrap';

const Label = (props) =>
    <Form.Control as="select" defaultValue={props.defaultValue} className={props.className} name={props.name} value={props.value} onChange={props.onChange}>
        {
            props.options.map( (value, index) => 
                <option key={index}>{value}</option>
            )
        }
    </Form.Control>

export default Label;