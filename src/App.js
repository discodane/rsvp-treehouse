import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Matt K',
        isConfirmed: false,
        isEditing: true
      }
    ],
    pendingGuest: "",
    isFiltered: false,
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  removeGuestAt = index => 
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1),
      ]
    })

  toggleFilter = () => this.setState({isFiltered: !this.state.isFiltered});

  handleNameInput = (e) => this.setState({pendingGuest: e.target.value});

  addGuest = e => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      guests: [
        {
          name: prevState.pendingGuest,
          isConfirmed: false,
          isEditing: false,
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
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          removeGuestAt={this.removeGuestAt}
          setNameAt={this.setNameAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
