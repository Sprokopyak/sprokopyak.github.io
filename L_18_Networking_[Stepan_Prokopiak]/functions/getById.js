const fs = require('fs');

module.exports = function(app) {
    app.get('/users/:id', function(req, res) {
        fs.readFile('./storage.data', function(err, data) {
            if (err) throw err;
            var dataParse = JSON.parse(data);
            var userId = parseInt(req.params.id);
            var newUser;
            for (var i = 0; i < dataParse.length; i++) {
                if (dataParse[i].id === userId) {
                    newUser = dataParse[i];
                    delete newUser.password;
                }
            }
            if (newUser) {
                res.status(200).send(newUser)
            } else {
                res.status(404).end();
            }
        });
    });
}