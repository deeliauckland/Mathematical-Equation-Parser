import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpressionInput.module.css';

const ExpressionInput = ({ expression, onChange, onParse }) => {
    return (
        <div className={styles.inputSection}>
            <label htmlFor="expression-input" className={styles.inputLabel}>
              Enter Mathematical Expression:
            </label>
            <div className={styles.inputGroup}>
              <input
                id="expression-input"
                type="text"
                value={expression}
                onChange={onChange}
                placeholder="e.g., 1 + 2 = 3"
                className={styles.input}
                autoFocus
              />
              <button 
                onClick={onParse}
                className={styles.input}
                disabled={!expression.trim()}
              >
                Parse
              </button>
            </div>
        </div>

    );
}

ExpressionInput.propTypes = {
  expression: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onParse: PropTypes.func.isRequired,
};

export default ExpressionInput;