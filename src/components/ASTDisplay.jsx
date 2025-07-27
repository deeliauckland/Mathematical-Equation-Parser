import React from 'react';
import PropTypes from 'prop-types';


const ASTDisplay = ({ ast, showAST, toggleAST }) => {
  if (!ast) return null;

  return (
    <div className="ast-section">
      <div className="ast-header">
        <h3>Abstract Syntax Tree (AST)</h3>
        <button onClick={toggleAST} className="toggle-button">
          {showAST ? 'Hide' : 'Show'} AST
        </button>
      </div>
      {showAST && (
        <div className="ast-display">
          <pre>{JSON.stringify(ast, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

ASTDisplay.propTypes = {
  ast: PropTypes.object,
  showAST: PropTypes.bool.isRequired,
  toggleAST: PropTypes.func.isRequired,
};

export default ASTDisplay;
