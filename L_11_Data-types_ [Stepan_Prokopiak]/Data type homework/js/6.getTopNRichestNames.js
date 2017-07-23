function getTopNRichestNames(n, arrayOfObj) {
    var objNumbers = {
        B: 1e9,
        M: 1e6,
        K: 1e3
    };

    var people = arrayOfObj.map(function(person) {
        var newPerson = {
            name: person.name,
            income: parseFloat(person.income) * objNumbers[person.income[person.income.length - 1].toUpperCase()]
        };
        return newPerson;
    });

    people.sort((a, b) => b.income - a.income);
    return pluckByAttribute(people, "name").slice(0, n);
}

var people = [
        {name: 'Bara', income: '1B'},
  	    {name: 'Dara', income: '5B'},
  	    {name: 'Kara', income: '1M'},
  	    {name: 'Zara', income: '2K'}
  ];

console.log(getTopNRichestNames(2, people)) ;
console.log(getTopNRichestNames(100, people)) ;