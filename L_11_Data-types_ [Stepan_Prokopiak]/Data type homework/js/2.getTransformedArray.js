function increment(num) {
    return num + 1
};

function getTransformedArray(array, element) {
    var transArray = [];
    forEach(array, function(el) {
        transArray.push(element(el));
    });
    return transArray;
}

console.log(getTransformedArray([1, 7, 20], increment));