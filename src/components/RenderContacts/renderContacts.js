import PropTypes from 'prop-types';
import s from './renderContact.module.css';

const RenderContacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <p className={s.text}>Contacts</p>
      <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              <span className="boldFont">{name}</span> : ( {number} )
              <button
                className={s.button24}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

RenderContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default RenderContacts;
