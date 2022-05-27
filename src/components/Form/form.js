import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  handleInputText = evnt => {
    this.setState({
      [evnt.currentTarget.name]: evnt.currentTarget.value,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.formSubmit}>
        <label className={s.text}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputText}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.text}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputText}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.button3} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
