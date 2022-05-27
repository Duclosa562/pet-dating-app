const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
//require('./database.js');
const q = require('./db_queries');
const util = require('util');
const encoder = new util.TextEncoder('utf-8');
const { MongoClient, ObjectId } = require("mongodb");
const fs = require('fs');

app.enable('trust proxy');
app.use(bodyParser.json());
app.use(cors());
const router = express.Router()

const accountsCollection = 'Accounts';
const sheltersCollection = 'Shelters';
const animalsCollection = 'Animals';

/*****************************
 * Serve React App
 *****************************/



//const Account = require('../models/Account');
// .. Shelter
// .. Animal

/*****************************
 * Helper Functions
 *****************************/

// given a GET request object, pull out the Collection and Query
function _get_request_query(req) {
    console.log('_get_request_query_params()');
    var query = {}
    for (const key in req.query) {
        if (key != 'collection') {
            query[key] = req.query[key];
        }
    }
    var result = {"collection": req.query.collection, "query": query}
    console.log(JSON.stringify(result, undefined, 4));
    return result;
}

function _get_put_update_json(query) {
    console.log('_get_put_update_json()');
    delete query["_id"];
    return {$set: query};
}

/*****************************
 * GET
 *****************************/

router.get('/api/:quantity', async function(req, res) {
    console.log('\nGET /api/:quantity');
    console.log('url = ' + req.protocol + '://' + req.get('host') + req.originalUrl);

    var db_req = _get_request_query(req)
    
    if (req.params.quantity == 'many') {
        var data = await q.query_findMany(db_req.collection, db_req.query);
    } else if (req.params.quantity == 'one') {
        var data = await q.query_findOne(db_req.collection, db_req.query);
    } else {
        req.status(400).send({"error": "bad request"});
        return;
    }
    
    console.log('\nQuery Results @ Server level for GET api/:quantity');
    if (data.length > 0) {
        console.log('data is not empty, but too afraid to print');
    }
    //console.log(data);
    res.status(200).send({"data": data});
});

router.get('/api/most-recent/:quantity', async function(req, res) {
    console.log('GET /api/most-recent/:quantity');
    console.log('url = ' + req.protocol + '://' + req.get('host') + req.originalUrl);
    var data = await q.query_mostRecent(Number(req.params.quantity));
    res.status(200).send({"data": data});
});

router.get('/api/user-landing/:quantity', async function(req, res) {
    console.log('GET /api/landing-page/:quantity');
    console.log('url = ' + req.protocol + '://' + req.get('host') + req.originalUrl);
    var data = await q.query_mostRecentFiltered(Number(req.params.quantity));
    if (data.lenght > 0) {
        console.log('data.length > 0');
        console.log('too afraid to actually print it, but returning data to user');
    }
    res.status(200).send({"data": data});
});

/*****************************
 * POST
 *****************************/

router.post('/api/insert', async function(req, res) {
    var data = await q.query_insertOne(req.body.collection, req.body.query);
    if (data == JSON.stringify({})) {
        res.status(500).send({"error": "db insert not successful"});
        return
    }

    res.status(201).send({"data": data});
});

/*****************************
 * PUT
 *****************************/

router.put('/api/update', async function(req, res) {
    var query = {_id: ObjectId(req.body.query._id)}
    var update = _get_put_update_json(req.body.query);

    // will the parse the stringify take care of my issue?
    console.log(update);
    var data = await q.query_updateOne(req.body.collection, query, update);

    if (data == JSON.stringify({})) {
        res.status(500).send({"error": "db insert not successful"});
        return
    }

    res.status(200).send({"data": data});
});


/*****************************
 * DELETE
 *****************************/

 router.delete('/api/delete', async function(req, res) {
    var data = await q.query_deleteOne(req.body.collection, {_id: ObjectId(req.body.id)});

    if (data == JSON.stringify({})) {
        res.status(500).send({"error": "db insert not successful"});
        return
    }

    res.status(200).send({"data": data});
});

/*****************************
 * HEROKU DEPLY HANDLER
 *****************************/
/*
// Accessing the path module
// const path = require("path");
if (process.env.NODE_ENV === 'production'){
    // Step 1:
    app.use(express.static(path.join(__dirname, "../")));
    // Step 2:
    app.get("*", function (request, response) {
        response.sendFile(path.join(__dirname, "../", "build", "index.html"));

});
}*/

// Heroku guide
//app.use(express.static(path.join(__dirname, '../build')))
//app.use(express.static(path.join(__dirname, '../build')))

/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'))
});*/

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/:file', function(req, res) {
    console.log('\n\nGET /:file');
    console.log(req.url);
    var fileExists = fs.existsSync(path.join(__dirname, '../build', req.params.file).toString());
    
    console.log('File:');
    console.log(fileExists);

    if (fileExists) {
        res.sendFile(path.join(__dirname, '../build', req.params.file));
        return;
    }
    
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/static/css/:file', function(req, res) {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, '../build', req.url));
});

app.get('/static/js/:file', function(req, res) {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, '../build', req.url));
});

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;
