import React from 'react';
import GuestList from './GuestList';
import Counter from './Counter';
import PropTypes from 'prop-types';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props => (
    <div className="main">
        <ConfirmedFilter
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}  
        />
        <Counter totalInvited={props.totalInvited} numberAttending={props.numberAttending} unconfirmed={props.unconfirmed} />

        <GuestList
            guests={props.guests}
            toggleConfirmation={props.toggleConfirmation}
            toggleEditing={props.toggleEditing}
            removeGuest={props.removeGuest}
            setName={props.setName}
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
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default MainContent;