import React from 'react';
import PropTypes from 'prop-types';

const ExampleList = ({ examples, onExampleClick }) => {
  return (
    <div className="examples-section">
      <h3>Example Expressions:</h3>
      <div className="examples-grid">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onExampleClick(example)}
            className="example-button"
            title="Click to use this example"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};

ExampleList.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.string).isRequired,
  onExampleClick: PropTypes.func.isRequired,
};

export default ExampleList;
