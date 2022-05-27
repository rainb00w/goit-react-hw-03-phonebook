import React from 'react';
import PropTypes from 'prop-types';
import s from './/filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input className={s.text} type="text" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
