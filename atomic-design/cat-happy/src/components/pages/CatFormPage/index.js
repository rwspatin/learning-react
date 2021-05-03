import React, { Component } from 'react'
import CatFormTemplate from '../../templates/CatFormTemplate'
import catFormData from '../../../data/CatFormData'

export class CatFormPage extends Component {
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
    }

    handleDateChange(name, moment) {
        const value = moment;
        this.setState({
          [name]: value    });
    }

    render() {
        const { catName, bornDate, vaccineDate, race, color, button, header } = catFormData
        
        return (
            <CatFormTemplate
                catName= {catName}
                bornDate= {bornDate}
                vaccineDate= {vaccineDate}
                race= {race}
                color= {color}
                button= {button}
                header= {header}
                onChange={this.handleInputChange}
                onChangeDate={this.handleDateChange}
            />           
        )
    }
}


export default CatFormPage
