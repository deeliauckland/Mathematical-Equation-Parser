import React, { useState } from 'react';
import './App.css';
import { parseExpression } from './parser-service';
import Header from './components/Header';
import ExpressionInput from './components/ExpressionInput';
import ResultDisplay from './components/ResultDisplay';
import ExampleList from './components/ExampleList';
import ASTDisplay from './components/ASTDisplay';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  // const [history, setHistory] = useState([]);
  const [showAST, setShowAST] = useState(false);
  const [ast, setAst] = useState(null);

  const handleExpressionChange = (e) => {
    setExpression(e.target.value);
    setError('');
    setResult(null);
    setAst(null);
  };

  const parseCurrentExpression = () => {
    if (!expression.trim()) {
      setError('Please enter an expression');
      return;
    }

    try {
      const parseResult = parseExpression(expression);
      
      if (typeof parseResult === 'string' && parseResult.startsWith('Error:')) {
        setError(parseResult);
        setResult(null);
        setAst(null);
      } else {
        setResult(parseResult);
        setError('');

        // For demonstration, we'll create a simple AST representation
        setAst(createSimpleAST(expression, parseResult));
      }
    } catch (err) {
      setError(`Parse error: ${err.message}`);
      setResult(null);
      setAst(null);
    }
  };

  const createSimpleAST = (expr, result) => {
    // Simple AST representation for demonstration
    const hasComparison = expr.includes('=') || expr.includes('!=');
    
    if (hasComparison) {
      const operator = expr.includes('!=') ? '!=' : '=';
      const [left, right] = expr.split(operator);
      
      return {
        type: 'comparison',
        operator: operator.trim(),
        left: { type: 'arithmetic', expression: left.trim() },
        right: { type: 'arithmetic', expression: right.trim() },
        result: result
      };
    } else {
      return {
        type: 'arithmetic',
        expression: expr.trim(),
        result: result
      };
    }
  };

  const handleExampleClick = (example) => {
    setExpression(example);
  };

  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="parser-section">
          <ExpressionInput
            expression={expression}
            onChange={handleExpressionChange}
            onParse={parseCurrentExpression}
          />

          <ResultDisplay result={result} error={error} />

          <ExampleList
            examples={[
              "1 + 2 = 3",
              "6 = 10 / 2 + 1",
              "12 + 3 != 4 / 2 + 5",
              "2 + 3 * 2 = 10",
              "2 * 3 + 4 != 10",
              "5 * 2 - 3 = 7",
              "220 / 10 * 2 = 5"
            ]}
            onExampleClick={handleExampleClick}
          />

          <ASTDisplay ast={ast} showAST={showAST} toggleAST={() => setShowAST(!showAST)} />
        </div>
      </main>

      <footer className="App-footer">
        <div className="footer-content">
          <h4>Features:</h4>
          <ul>
            <li>Arithmetic operations: +, -, *, /</li>
            <li>Comparison operators: =, !=</li>
            <li>Proper operator precedence</li>
            <li>Whitespace handling</li>
            <li>Error reporting with location</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;