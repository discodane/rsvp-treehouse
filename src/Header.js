import React from 'react';
import PropTypes from 'prop-types';
import AddNameForm from './AddNameForm';

const Header = props => (
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <AddNameForm 
            handleSubmit={props.handleSubmit}
            handleChange={props.handleNameInput}
            pendingGuest={props.pendingGuest}
        />
    </header>
)

Header.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default Header;