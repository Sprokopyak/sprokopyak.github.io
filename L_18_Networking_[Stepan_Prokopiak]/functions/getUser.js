const fs = require('fs');

module.exports = function(app) {
    app.get('/users', function(req, res) {
        fs.readFile('./storage.data', function(err, data) {
            if (err) throw err;
            var cont = data.length ? JSON.parse(data) : [];
            for (let key of cont) {
                delete key.password;
            }
            res.status(200).send(cont);
        });
    });
}