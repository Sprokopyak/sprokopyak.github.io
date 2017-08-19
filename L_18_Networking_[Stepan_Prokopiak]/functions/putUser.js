const fs = require('fs');
const passwordHash = require('password-hash');

module.exports = function(app) {
    app.put('/users/:id', function(req, res) {
        fs.readFile('./storage.data', function(err, data) {
            if (err) throw err;
            var dataParse = JSON.parse(data);
            var user = false;
            var userId = parseInt(req.params.id);
            var changeUser = req.body;
            var cont = data.length ? JSON.parse(data) : [];
            var newUser = {};
            for (var key of cont) {
                if (key.id === userId) {
                    if (changeUser.password) {
                        changeUser.password = passwordHash.generate(changeUser.password);
                    }
                    key = Object.assign(key, changeUser);
                    user = true;
                    newUser = key;
                }
            }
            if (user) {
                fs.writeFile('./storage.data', JSON.stringify(cont), function(err) {
                    if (err) throw err;
                });
                delete newUser.password;
                res.status(200).send(newUser);
            } else {
                res.status(404).end();
            }

        });

    });
}