import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Header from '../../UI/organisms/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

export class GenericTemplate extends Component {
    render() {
        const { header } = this.props
        
        return (
            <>
                <Header
                    header= {header}
                />
                <Container> 
                    {
                        this.props.children
                    }
                </Container>
            </>
        )
    }
}

Header.propTypes = {
    header: PropTypes.object
}

export default GenericTemplate
