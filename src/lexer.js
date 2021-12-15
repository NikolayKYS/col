const moo = require('moo')

const lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    num:  /0|[1-9][0-9]*/,
    str:  /"(?:\\["\\]|[^\n"\\])*"/,
    lparen:  '(',
    rparen:  ')',
    lbrace:  '{',
    rbrace:  '}',
    iden: /[a-zA-Z][a-zA-Z_0-9]+/,
    fatarrow: '=>',
    assign: '=',
    NL:      { match: /\n/, lineBreaks: true },
})

module.exports = lexer;

// lexer.reset('niko = "ajameti"')

// while (true) {
//     const token = lexer.next();
//     if (!token) {
//         break;
//     }
//     console.log(token);
// }
