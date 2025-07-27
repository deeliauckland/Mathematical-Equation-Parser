// src/components/Header.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Header = () => (
  <header className="App-header">
    <h1>Mathematical Equation Parser</h1>
    <p className="subtitle">Built with Nearley and Moo</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
