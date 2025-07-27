// Parser service for React integration
import nearley from "nearley";
import grammar from "./parser.js";

export function parseExpression(input) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  
  try {
    parser.feed(input);
    const result = parser.results[0];
    if (parser.results.length > 0 && Array.isArray(result) && typeof result[0] === 'boolean') {
      return result[0];
    } else {
      throw new Error("Incomplete parse - expression is not complete");
    }
  } catch (e) {
    // Format error message for better user experience
    if (e.message.includes('Syntax error')) {
      const lines = e.message.split('\n');
      const errorLine = lines.find(line => line.includes('Unexpected'));
      if (errorLine) {
        return `Error: ${errorLine}`;
      }
    }
    return `Error: ${e.message}`;
  }
}

// Utility function to evaluate expressions step by step (for educational purposes)
export function evaluateStepByStep(expression) {
  const steps = [];
  
  try {
    // This is a simplified step-by-step evaluator
    // In a real implementation, you'd want to traverse the actual AST
    
    if (expression.includes('=') || expression.includes('!=')) {
      const operator = expression.includes('!=') ? '!=' : '=';
      const [left, right] = expression.split(operator);
      
      steps.push(`Original: ${expression}`);
      steps.push(`Left side: ${left.trim()}`);
      steps.push(`Right side: ${right.trim()}`);
      
      // Evaluate each side (simplified)
      const leftResult = eval(left.trim());
      const rightResult = eval(right.trim());
      
      steps.push(`Left evaluates to: ${leftResult}`);
      steps.push(`Right evaluates to: ${rightResult}`);
      
      const finalResult = operator === '=' ? leftResult === rightResult : leftResult !== rightResult;
      steps.push(`${leftResult} ${operator} ${rightResult} = ${finalResult}`);
      
      return { steps, result: finalResult };
    } else {
      // Just arithmetic
      const result = eval(expression);
      steps.push(`${expression} = ${result}`);
      return { steps, result };
    }
  } catch (e) {
    return { steps: [`Error evaluating: ${e.message}`], result: null };
  }
}