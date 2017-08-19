const fs = require('fs');
const passwordHash = require('password-hash');

module.exports = function(app) {
    app.post('/users', function(req, res) {
        fs.readFile('./storage.data', function(err, data) {
            if (err) throw err;
            var user = false;
            var changeUser = req.body;
            var cont = data.length ? JSON.parse(data) : [];
            
            for (var i = 0; i < content.length; i++) {
                if (cont[i].email === changeUser.email || cont[i].id === changeUser.id) {
                    user = true;
                    break;
                }
            }

            if (user) {
                res.status(409).end();
            }
            
            changeUser.password = passwordHash.generate(changeUser.password);
            cont.push(req.body);

            fs.writeFile('./storage.data', JSON.stringify(cont), function(err) {
                if (err) throw err;
                res.status(201).end();
            });

        });
    });
}