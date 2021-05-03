import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import FormGroupSelect from '../../molecules/FormGroupSelect'
import FormGroupText from '../../molecules/FormGroupText'
import ButtonComp from '../../atoms/ButtonComp'
import PropTypes from 'prop-types'
import FormGroupDate from '../../molecules/FormGroupDate'

export class CatForm extends Component {

    constructor(props){
        super(props);

        this.state={}
        this.onChange=this.props.onChange.bind(this);
        this.onChangeDate=this.props.onChangeDate.bind(this);
    }

    render() {
        const { catName, bornDate, vaccineDate, race, color, button } = this.props

        return (

            <Form>
                <FormGroupText
                    controlId={catName.controlId}
                    labelName={catName.labelName}
                    labelClassName={catName.labelClassName}
                    inputName={catName.inputName}
                    value={this.state[catName.inputName]}
                    onChange={this.onChange}
                    type={catName.type}
                    placeholder={catName.placeholder}
                    inputClassName={catName.inputClassName} />

                <FormGroupDate
                    controlId={bornDate.controlId}
                    labelName={bornDate.labelName}
                    labelClassName={bornDate.labelClassName}
                    inputName={bornDate.inputName}
                    value={this.state[bornDate.inputName]}
                    onChange={this.onChangeDate}
                    placeholder={bornDate.placeholder}
                    defaultValue={bornDate.defaultValue}
                    inputClassName={bornDate.inputClassName} />

                <FormGroupDate
                    controlId={vaccineDate.controlId}
                    labelName={vaccineDate.labelName}
                    labelClassName={vaccineDate.labelClassName}
                    inputName={vaccineDate.inputName}
                    value={this.state[vaccineDate.inputName]}
                    onChange={this.onChangeDate}
                    placeholder={vaccineDate.placeholder}
                    defaultValue={vaccineDate.defaultValue}
                    inputClassName={vaccineDate.inputClassName} />

                <FormGroupSelect
                    controlId={race.controlId}
                    labelName={race.labelName}
                    labelClassName={race.labelClassName}
                    inputName={race.inputName}
                    value={this.state[race.inputName]}
                    onChange={this.onChange}
                    options={race.options}
                    inputClassName={race.inputClassName}
                    defaultValue={race.defaultValue} />

                <FormGroupSelect
                    controlId={color.controlId}
                    labelName={color.labelName}
                    labelClassName={color.labelClassName}
                    inputName={color.inputName}
                    value={this.state[color.inputName]}
                    onChange={this.onChange}
                    options={color.options}
                    inputClassName={color.inputClassName}
                    defaultValue={color.defaultValue} />

                <ButtonComp
                    variant={button.variant}
                    size={button.size}
                    name={button.name}
                    value={button.value}
                    onClick={button.onClick} />
            </Form>

        )
    }

}

CatForm.propTypes = {
    catName: PropTypes.shape({
        controlId: PropTypes.string.isRequired,
        labelName: PropTypes.string.isRequired,
        labelClassName: PropTypes.string,
        inputName: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        inputClassName: PropTypes.string,
    }),
    bornDate: PropTypes.shape({
        controlId: PropTypes.string.isRequired,
        labelName: PropTypes.string.isRequired,
        labelClassName: PropTypes.string,
        inputName: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        inputClassName: PropTypes.string,
    }),
    vaccineDate: PropTypes.shape({
        controlId: PropTypes.string.isRequired,
        labelName: PropTypes.string.isRequired,
        labelClassName: PropTypes.string,
        inputName: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        inputClassName: PropTypes.string,
    }),
    race: PropTypes.shape({
        controlId: PropTypes.string.isRequired,
        labelName: PropTypes.string.isRequired,
        labelClassName: PropTypes.string,
        inputName: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        inputClassName: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    color: PropTypes.shape({
        controlId: PropTypes.string.isRequired,
        labelName: PropTypes.string.isRequired,
        labelClassName: PropTypes.string,
        inputName: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        inputClassName: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    button: PropTypes.shape({
        variant: PropTypes.string,
        size: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func
    }),
    onChange: PropTypes.func
}

export default CatForm
