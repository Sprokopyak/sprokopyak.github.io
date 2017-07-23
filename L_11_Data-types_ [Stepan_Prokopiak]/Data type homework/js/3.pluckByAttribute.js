function pluckByAttribute(array, element) {
    return getTransformedArray(array, function(el) {
        return el[element];
    });
}

var presidents = [ { name: 'George', surname: 'Kush' } ,
                 { name: 'Barako', surname: 'Obaame' } ];

console.log(pluckByAttribute( presidents, 'name' ));
