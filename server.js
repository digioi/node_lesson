const express = require('express');
const auth = require('./basicAuth.js')
const app = express();
app.get('/private_area', auth, (req, res) => res.send('Hello '));
app.use(express.static(`${__dirname}/public`));
app.listen(3000);
