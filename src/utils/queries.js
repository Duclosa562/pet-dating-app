/*

This file allows us to interact with the Proxy server and make calls to the database

*/

const config = require('../config');


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

function _build_get_url(collection, query) {
    console.log('_build_get_url()');

    console.log('query=');
    console.log(query);
    var query_empty = (JSON.stringify(query) == JSON.stringify({}));
    console.log('query empty? ' + query_empty);

    var url = config.config.url;
    url = url + '/api';
    url = url + '?collection=' + collection;

    /*if (!query_empty) {
        url = url + '?';
    }*/

    for (const key in query) {
        url = url + '&'
        url = url + String(key) + '=';
    }

    if(url.slice(-1) === '&') {
        url = url.slice(0, -1);
    }

    console.log('return  ' + url);

    return url;

}

/****************************
 * READ Queries
 ****************************/

async function query_findMany(collection, query) {

    console.log('query_findMany()');


    if (_valid_collection(collection) === false) {
        return _error_json('Invalid Collection Paramter');
    }

    var url = _build_get_url(collection, query);
    console.log(url);

    await fetch(url, _create_get_json('GET'))
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                
                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    return data;
                })
            }
        )
}

module.exports = {
    query_findMany
}