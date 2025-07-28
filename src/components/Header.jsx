// src/components/Header.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Mathematical Equation Parser</h1>
    <p className={styles.subtitle}>Built with Nearley and Moo</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
