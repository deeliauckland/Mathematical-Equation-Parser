@{%
const lexer = require("./lexer.js");
%}


@lexer lexer

main -> _ expr _ {% d => d[1] %}

expr -> comparison

comparison -> arithmetic _ %eq _ arithmetic {% d => Boolean(d[0] === d[4]) %}
            | arithmetic _ %neq _ arithmetic {% d => Boolean(d[0] !== d[4]) %}
            | arithmetic {% id %}

arithmetic -> arithmetic _ %plus _ term {% d => d[0] + d[4] %}
            | arithmetic _ %minus _ term {% d => d[0] - d[4] %}
            | term {% id %}

term -> term _ %times _ factor {% d => d[0] * d[4] %}
     | term _ %divide _ factor {% d => d[0] / d[4] %}
     | factor {% id %}

factor -> %number {% d => Number(d[0].value) %}
       | %lparen _ expr _ %rparen {% d => d[2] %}

_ -> %WS _ {% d => null %}
   | null {% d => null %}