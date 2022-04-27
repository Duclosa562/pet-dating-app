const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database.js');
const q = require ('./db_queries');
const util = require('util');
const encoder = new util.TextEncoder('utf-8');

app.use(bodyParser.json());
app.use(cors());
const router = express.Router()

const accountsCollection = 'Accounts';
const sheltersCollection = 'Shelters';
const animalsCollection = 'Animals';

const Account = require('../models/Account');
// .. Shelter
// .. Animal

/*****************************
 * Helper Functions
 *****************************/

// given a GET request object, pull out the Collection and Query
function _get_request_get_query(req) {

    console.log('_get_query()');

    var query = {}

    for (const key in req.query) {
        console.log('key = ' + key);

        if (key != 'collection') {
            query[key] = req.query[key];
        }
    }

    var result = {"collection": req.query.collection, "query": query}
    console.log(result);

    return result;
}


/*****************************
 * GET
 *****************************/


router.get('/api', async function(req, res) {
    /*Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => console.log(err))*/

    console.log('Received GET /api');
    console.log(req.method);
    console.log('collection=' + req.params.collection);

    db_req = _get_request_get_query(req)
    console.log('db_req=');
    console.log(db_req);
    
    var data = await q.query_findMany(db_req.collection, db_req.query);
    console.log('Query Results @ Server2 level');
    console.log('Result:');
    console.log(data);
    //console.log(results[1]);
    res.status(200).send({"data": data});

    //res.status(200).send({"data": "some fake data from server2 GET /api. Not yet passing back real data"});
})

router.post('/api/accounts', (req, res) => {
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
