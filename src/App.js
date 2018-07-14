import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    guests: [],
    pendingGuest: "",
    isFiltered: false,
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, idToChange) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (idToChange === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  setNameAt = (name, idToChange) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (idToChange === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  removeGuest = id => 
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    })

  toggleFilter = () => this.setState({isFiltered: !this.state.isFiltered});

  handleNameInput = (e) => this.setState({pendingGuest: e.target.value});

  addGuest = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState((prevState, props) => ({
      guests: [
        {
          name: prevState.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id,
        },
        ...prevState.guests,
      ],
      pendingGuest: '',
    }))
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => 
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total, 
      0
    )

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const unconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header 
          handleSubmit={this.addGuest} 
          handleNameInput={this.handleNameInput} 
          pendingGuest={this.state.pendingGuest} 
        />
        <MainContent 
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          unconfirmed={unconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          removeGuest={this.removeGuest}
          setName={this.setNameAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
