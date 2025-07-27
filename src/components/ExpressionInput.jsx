import React from 'react';
import PropTypes from 'prop-types';

const ExpressionInput = ({ expression, onChange, onParse }) => {
    return (
        <div className="input-section">
            <label htmlFor="expression-input" className="input-label">
              Enter Mathematical Expression:
            </label>
            <div className="input-group">
              <input
                id="expression-input"
                type="text"
                value={expression}
                onChange={onChange}
                placeholder="e.g., 1 + 2 = 3"
                className="expression-input"
                autoFocus
              />
              <button 
                onClick={onParse}
                className="parse-button"
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