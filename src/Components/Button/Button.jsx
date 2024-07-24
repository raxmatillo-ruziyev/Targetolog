// Button.js
import React from 'react';
import './Button.scss';

const Button = ({ name, onClick, loading }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      type="submit"
      disabled={loading} // Loading holatida tugmachani o'chirish
    >
      {loading ? "Отправка..." : name}
    </button>
  );
}

export default Button;
