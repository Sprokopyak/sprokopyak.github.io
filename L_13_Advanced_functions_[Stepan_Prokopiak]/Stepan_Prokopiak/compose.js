function compose() {
    return Array.prototype.reduceRight.call(arguments, function(previousFn, currecntFn) {
        return function() {
            return currecntFn(previousFn.apply(null, arguments));
        };
    })
}
module.exports = compose;