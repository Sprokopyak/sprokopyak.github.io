var fibonacci = (function() {
    var result = {};
    return function fib(value) {
        if (value in result) {
            return result[value];
        } else {
            if (value === 0 || value === 1) {
                return value;
            } else {
                return result[value] = fib(value - 1) + fib(value - 2);
            }
        }
    }
    return f;
})();

module.exports = fibonacci;