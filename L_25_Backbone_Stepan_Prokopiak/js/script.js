var President = Backbone.Model.extend({
    defaults: {
        name: '',
        surname: '',
        rate: 0
    },
    validate: function(attributes) {
        if (attributes.surname === '' && attributes.name === '') {
            return 'Enter valid name or surname';

        }
    }
});

var PresidentsCollection = Backbone.Collection.extend({
    model: President
});

var presidentsCollection = new PresidentsCollection([{
    name: 'George',
    surname: 'Washington',
    rate: 33
}, {
    name: 'Barack',
    surname: 'Obama',
    rate: 20
}]);

presidentsCollection.push(new President({
    name: 'Petro',
    surname: 'Poroshenko',
    rate: 1
}));

presidentsCollection.comparator = 'rate';
presidentsCollection.sort();


var PresidentsCollectionView = Backbone.View.extend({
    tagName: 'tbody',
    render: function() {
        var el = this.$el;
        el.html(`<tr> <th>Name</th>
                    <th>LastName</th>
                    <th>PresidentRate</th>
                 </tr>`);
        this.model.models.forEach(function(element) {
            el.append(new PresidentView({
                model: element
            }).render().$el);
        });
        return this;
    }
});


var PresidentView = Backbone.View.extend({
    tagName: 'tr',
    className: 'candidate',
    render: function() {
        this.$el.html(`<td>${this.model.get('name')}</td>
                       <td>${this.model.get('surname')}</td>
                       <td>${this.model.get('rate')}</td>`);
        return this;
    }
});

var output = new PresidentsCollectionView({
    model: presidentsCollection
});

$('#personTemplate').html(output.render().$el);