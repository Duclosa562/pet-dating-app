/*

This file allows us to interact with the Proxy server and make calls to the database

*/

const config = require('../config');


/****************************
 * Validation
 ****************************/




/****************************
 * Utility Functions
 ****************************/

function _error_json(msg) {
    return {"Error": msg}
}

function _valid_collection(collection) {
    var valid_collections = ['Animals', 'Accounts', 'Shelters'];
    var valid = false;
    var i=0;
    for (i; i<valid_collections.length; i++) {
        if (collection === valid_collections[i]) {
            valid = true;
        }
    }
    return valid;
}

function _create_get_json(method) {

    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    return {
        method: method,
        headers: headers
    };
}

function _create_post_json(method, collection, query) {
    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    var bodie = {"collection": collection, "query": query};

    return {
        method: method,
        headers: headers,
        body: JSON.stringify(bodie)
    }
}

function _create_delete_json(collection, id) {
    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    var bodie = {"collection": collection, "id": id};

    return {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(bodie)
    }
}

function _build_get_url(collection, query, quantity) {
    console.log('_build_get_url()');

    console.log('query=' +  query);
    //var query_empty = (JSON.stringify(query) == JSON.stringify({}));
    ///*console.log('query empty? ' + query_empty);*/

    if (quantity != 'one' && quantity != 'many') {
        console.log('error in _build_get_url(), invalid quantity param');
        return 'ERROR';
    }

    var url = config.config.url;
    url = url + '/api/' + quantity;
    url = url + '?collection=' + collection;

    for (const key in query) {
        url = url + '&'
        url = url + String(key) + '=' + String(query[key]);
    }

    if(url.slice(-1) === '&') {
        url = url.slice(0, -1);
    }

    return url;
}

function _build_post_url() {
    return config.config.url + '/api/insert';
}

function _build_put_url() {
    return config.config.url + '/api/update'
}

function _build_delete_url() {
    return config.config.url + '/api/delete'
}

/****************************
 * READ Queries
 ****************************/

async function _query_find(collection, query, quantity) {

    if (_valid_collection(collection) === false) {
        return _error_json('Invalid Collection Paramter');
    }
    var url = _build_get_url(collection, query, quantity);
    console.log('querying url ' + url);

    var response = await fetch(url, _create_get_json('GET'));
    if (response.status !== 200) {
        return {"error": "GET request failed from query_findMany()", "code": response.status}
    }
    return await response.json();
}

async function query_findMany(collection, query) {
    console.log('query_findMany()');
    return await _query_find(collection, query, 'many');
}

async function query_findOne(collection, query) {
    console.log('query_findOne()');
    return await _query_find(collection, query, 'one');
}

/****************************
 * WRITE Queries
 ****************************/

async function _query_insertOne(collection, query) {
    if (_valid_collection(collection) === false) {
        return _error_json('Invalid Collection Paramter');
    }

    var url = _build_post_url(collection, query);
    console.log('querying url ' + url);

    var request = _create_post_json('POST', collection, query);

    var response = await fetch(url, request)
    if (response.status !== 201) {
        return {"error": "POST request failed from query_insertOne()", "code": response.status}
    }
    return await response.json();
}

async function query_insertOne(collection, query) {
    console.log('query_insertOne()');
    return await _query_insertOne(collection, query);
}

/****************************
 * UPDATE Queries
 ****************************/

// Query must include the "_id" field with a valid id
// the remaining fields that are not _id will be updated for that entity (entity being Animal, Shelter, or Account)
// example: query = {"_id": 'abc123', "name": "newAnimalName"}, collection = "Animals"
// ^ the animal with _id 'abc123' will have its name updated to "newAnimalName"
async function query_updateOne(collection, query) {
    console.log('query_updateOne()');
    if (_valid_collection(collection) === false) {
        return _error_json('Invalid Collection Parameter');
    }

    var url = _build_put_url(collection, query);
    console.log('querying url ' + url);

    var request = _create_post_json('PUT', collection, query);

    var response = await fetch(url, request)
    if (response.status !== 200) {
        return {"error": "PUT request failed from query_updateOne()", "code": response.status}
    }
    return await response.json();
}

/****************************
 * DELETE Queries
 ****************************/

// id is just a string, the ID of the object to be deleted
async function query_deleteOne(collection, id) {

    console.log('query_updateOne()');
    if (_valid_collection(collection) === false) {
        return _error_json('Invalid Collection Parameter');
    }

    var request = _create_delete_json(collection, id);
    var url = _build_delete_url();
    console.log('querying ' + url);

    var response = await fetch(url, request)
    if (response.status !== 200) {
        return {"error": "DELETE request failed from query_deleteOne()", "code": response.status}
    }
    return await response.json();
}


module.exports = {
    query_findMany,
    query_findOne,
    query_insertOne,
    query_updateOne,
    query_deleteOne
}