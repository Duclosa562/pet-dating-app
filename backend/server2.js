const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database.js');
const q = require ('./db_queries');

app.use(bodyParser.json());
app.use(cors());
const router = express.Router()

const accountsCollection = 'Accounts';
const sheltersCollection = 'Shelters';
const animalsCollection = 'Animals';

const Account = require('../models/Account');
// .. Shelter
// .. Animal


router.get('/api/accounts', (req, res) => {
    /*Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => console.log(err))*/
    
    q.query_findMany(accountsCollection, {});
    
    console.log('')
    res.status(200).send({"hello": "we are returning information now"});    
})

router.post('/', (req, res) => {
    const { 
        type, 
        first_name,
        last_name,
        username,
        email,
        password,
    } = req.body;
    const newAccount = new Account({
        type: type, 
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password
    })
    newAccount.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
});


app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;