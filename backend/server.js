const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database.js');

app.use(bodyParser.json());
app.use(cors());

// not from the official guide, from https://forum.freecodecamp.org/t/mern-stack-deployment-to-heroku-backend-not-working/455439
/*app.use( (req, response, next)=> {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});*/

// API
const accounts = require('/api/accounts'); // prev users, users
app.use('/api/accounts', accounts); // prev users

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
