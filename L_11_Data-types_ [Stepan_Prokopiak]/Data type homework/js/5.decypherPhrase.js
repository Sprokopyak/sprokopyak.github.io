function decypherPhrase(object, str) {
    var res = {};

    for (var key in object) {
        if (!res.hasOwnProperty(key)) {
            res[object[key]] = key;
        }
    }
    return cypherPhrase(res, str);
}

console.log(decypherPhrase(charactersMap, 'kiggy dog'));