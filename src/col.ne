@{%
    const lexer = require("./lexer.js")
%}

@lexer lexer

state
    -> var {% id %}

var 
    -> %iden _ "=" _ ex
        {%
            function(data) {
                return {
                    type: "var",
                    varName: data[0],
                    varData: data[4]
                }
            }
        %}

ex 
    -> %str {% id %}
    |  %num {% id %}
    |  %iden {% id %}

_ -> %WS:*

__ -> %WS:+

_ml -> (%WS | %NL):*

__ml -> (%WS | %NL):+