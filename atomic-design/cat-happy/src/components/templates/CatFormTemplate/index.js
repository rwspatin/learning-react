import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CatForm from '../../UI/organisms/CatForm'
import GenericTemplate from '../GenericTemplate'

export class CatFormTemplate extends Component {
    render() {
        const { catName, bornDate, vaccineDate, race, color, button, header, onChange, onChangeDate } = this.props
        


        return (
            <GenericTemplate header={header}>
                
                <CatForm
                    catName= {catName}
                    bornDate= {bornDate}
                    vaccineDate= {vaccineDate}
                    race= {race}
                    color= {color}
                    button= {button}
                    onChange={onChange}
                    onChangeDate={onChangeDate}
                />
            </GenericTemplate>
        )
    }
}

CatForm.propTypes = {
    catName: PropTypes.object, 
    bornDate: PropTypes.object, 
    vaccineDate: PropTypes.object, 
    race: PropTypes.object, 
    color: PropTypes.object, 
    button: PropTypes.object
}

export default CatFormTemplate
