const fs = require('fs');

module.exports = function(app) {
    app.delete('/users/:id', function(req, res) {
        fs.readFile('./storage.data', function(err, data) {
            if (err) throw err;

            if (data.length === 0) {
                res.status(404).send('Could not found');
            } else {
                var dataParse = JSON.parse(data);
                var user = false;
                var userId = parseInt(req.params.id);
            }
            for (var i = 0; i < dataParse.length; i++) {
                if (dataParse[i].id === userId) {
                    dataParse.splice(i, 1);
                    user = true;
                    res.status(200).send('User has been successfully removed');
                    break;
                }
            }
            if (!user) {
                res.status(404).end();
            }
            fs.writeFile('./storage.data', JSON.stringify(dataParse), (err) => {
                if (err) throw err;
            });
        });
    });
}