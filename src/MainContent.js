import React from 'react';
import GuestList from './GuestList';
import Counter from './Counter';
import PropTypes from 'prop-types';

const MainContent = props => (
    <div className="main">
        <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                onChange={props.toggleFilter}
                checked={props.isFiltered}  
              /> Hide those who haven't responded
            </label>
        </div>
        <Counter totalInvited={props.totalInvited} numberAttending={props.numberAttending} unconfirmed={props.unconfirmed} />

        <GuestList
            guests={props.guests}
            toggleConfirmationAt={props.toggleConfirmationAt}
            toggleEditingAt={props.toggleEditingAt}
            removeGuestAt={props.removeGuestAt}
            setNameAt={props.setNameAt}
            isFiltered={props.isFiltered}
            pendingGuest={props.pendingGuest}
        />

    </div>
);

MainContent.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalInvited: PropTypes.func.isRequired,
    numberAttending: PropTypes.func.isRequired,
    unconfirmed: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default MainContent;