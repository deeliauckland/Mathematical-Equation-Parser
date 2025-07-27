import React from 'react';
import PropTypes from 'prop-types';

const ResultDisplay = ({ result, error }) => {
  if (error) {
    return (
      <div className="error">
        <span className="error-label">Error:</span>
        <span className="error-message">{error}</span>
      </div>
    );
  }

  if (result !== null) {
    return (
      <div className={`result ${result ? 'result-true' : 'result-false'}`}>
        <span className="result-label">Result:</span>
        <span className="result-value">
          {result ? '✅ True' : '❌ False'}
        </span>
      </div>
    );
  }

  return null;
};

ResultDisplay.propTypes = {
  result: PropTypes.bool,
  error: PropTypes.string,
};

export default ResultDisplay;
