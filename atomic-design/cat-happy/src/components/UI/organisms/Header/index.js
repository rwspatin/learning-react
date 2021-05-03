import React from 'react';
import { Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Header = ({header}) => 
    <Navbar bg={header.bg ?? 'dark'}>
        <Navbar.Brand href={header.href ?? '#home'} expand={header.expand}>{header.value}</Navbar.Brand>
    </Navbar>

Header.propTypes = {
    header: PropTypes.shape({
        href: PropTypes.string,
        value: PropTypes.string.isRequired,
        bg: PropTypes.string,
        expand: PropTypes.string
    }),
}

export default Header;