console.log(process.cwd())

const express = require('express');
const bodyparser = require('body-parser');
const authCheck = require('./middleware/auth')

var app = express();
app.use(bodyparser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

const publicAPI = require('./api/public')
const authAPI = require('./api/auth')

app.use('/api/public', publicAPI);
app.use('/api/auth', authCheck, authAPI);