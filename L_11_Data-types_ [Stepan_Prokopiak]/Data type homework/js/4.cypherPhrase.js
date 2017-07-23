function cypherPhrase(object, str) {
    var arrRes = getTransformedArray(str.split(''), function(el) {
        return object[el] || el;
    });

    return arrRes.join("");
}

var charactersMap = {a: "o", c: "d", t: "g"} ;

console.log(cypherPhrase( charactersMap, "kitty cat" ));