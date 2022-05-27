import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/';
import RenderContacts from './RenderContacts/';
import Section from './Section/';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )
    ) {
      alert(` ${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      id: nanoid(),
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = ID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== ID),
    }));
  };

  changeFilter = evnt => {
    this.setState({ filter: evnt.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Section>
        <Form onSubmit={this.formSubmitHandler} />
        {this.state.contacts.length > 0 ? (
          <Filter value={this.state.filter} onChange={this.changeFilter} />
        ) : (
          ''
        )}
        {this.state.contacts.length > 0 ? (
          <RenderContacts
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          'There are no contacts at this moment'
        )}
      </Section>
    );
  }
}

export default App;
