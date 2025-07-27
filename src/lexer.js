import moo from "moo";

const lexer = moo.compile({
  WS:      { match: /[ \t]+/, lineBreaks: false },
  number:  /[0-9]+/,
  eq:      "=",
  neq:     "!=",
  plus:    "+",
  minus:   "-",
  times:   "*",
  divide:  "/",
  lparen:  "(",
  rparen:  ")",
  NL:      { match: /\n/, lineBreaks: true },
});

export default lexer;