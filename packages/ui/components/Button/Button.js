import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return <button onClick={handleClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
