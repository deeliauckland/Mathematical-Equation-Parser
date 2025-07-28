import { describe, test, expect } from 'vitest';
import { parseExpression } from './parser-service.js';

describe('Equation Parser (Comparison Only)', () => {
  test('evaluates equality expressions', () => {
    expect(parseExpression('1 + 2 = 3')).toBe(true);
    expect(parseExpression('4 * 5 = 20')).toBe(true);
    expect(parseExpression('2 + 2 = 5')).toBe(false);
    expect(parseExpression('(2 + 3) * 4 = 20')).toBe(true);
  });

  test('evaluates inequality expressions', () => {
    expect(parseExpression('1 + 2 != 4')).toBe(true);
    expect(parseExpression('3 * 3 != 9')).toBe(false);
    expect(parseExpression('(5 + 5) / 2 != 4')).toBe(true);
  });

  test('returns error on invalid or incomplete syntax', () => {
    expect(parseExpression('1 +')).toMatch(/^Error:/);
    expect(parseExpression('4 * (')).toMatch(/^Error:/);
    expect(parseExpression('10 =')).toMatch(/^Error:/);
    expect(parseExpression('= 10')).toMatch(/^Error:/);
  });
});
