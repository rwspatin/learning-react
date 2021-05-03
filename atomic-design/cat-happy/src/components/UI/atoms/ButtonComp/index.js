import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComp = (props) =>
    <Button variant={props.variant} size={props.size} name={props.name} onClick={props.onClick}>{props.value}</Button>

ButtonComp.defaultProps = {
    variant: 'dark',
    size: 'md'
}

export default ButtonComp;