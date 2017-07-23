function forEach(array, element) {
    for (var i = 0; i < array.length; i++) {
        element(array[i]);
    }
}

forEach([3, 5, 2], function(el) {
    console.log(el)
});