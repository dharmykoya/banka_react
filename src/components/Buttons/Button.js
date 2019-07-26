import React from 'react';

import PropTypes from 'prop-types';
import './Button.css';

const button = (props) => {
  const { nameClass, clicked, children, disabled } = props;
  const buttonClass = [nameClass];
  if (disabled) {
    buttonClass.push('buttonDisabled');
  }
  return (
    <button
      type="submit"
      className={buttonClass.join(' ')}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

button.propTypes = {
  nameClass: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default button;
