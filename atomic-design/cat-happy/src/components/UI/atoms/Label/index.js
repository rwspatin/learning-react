import React from 'react';
import { Form } from 'react-bootstrap';

const Label = (props) =>
    <Form.Label className={props.className}>
        {props.name}
    </Form.Label>;

export default Label;