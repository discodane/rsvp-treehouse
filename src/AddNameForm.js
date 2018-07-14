import React from 'react';
import PropTypes from 'prop-types';

const AddNameForm = props => (
    <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} value={props.pendingGuest} placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>
)

AddNameForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default AddNameForm;