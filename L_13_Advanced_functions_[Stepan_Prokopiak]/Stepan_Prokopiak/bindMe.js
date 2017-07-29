Function.prototype.bindMe = function(value) {
    var thisValue = this;
    return function() {
        return thisValue.apply(value, arguments);
    }
}

function addPropToNumber(number) {
    return this.prop + number;
}

var bound = addPropToNumber.bindMe({
    prop: 9
});