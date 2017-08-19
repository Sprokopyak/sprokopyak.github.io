const express = require('express');
const fs = require( 'fs' );
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


require('./functions/postUser')(app);
require('./functions/getUser')(app);
require('./functions/getById')(app);
require('./functions/putUser')(app);
require('./functions/deleteUser')(app);

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
})
