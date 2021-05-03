import React from 'react';
import Datetime from 'react-datetime';
import 'moment'
import 'moment/locale/pt-br'
import 'react-datetime/css/react-datetime.css'

const InputDate = (props) => {
    let inputProps = {
        placeHolder: props.placeHolder,
        name: props.name,
        className: props.className + ' form-control',
        
    }

    return (
        <Datetime timeFormat={false} inputProps={inputProps} value={props.value} onChange={props.onChange.bind(this, props.name)}/>
    );
  };

export default InputDate;