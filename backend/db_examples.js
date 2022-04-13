/*

DATABASE QUERY EXAMPLES

Summary
    This code serves as an example of the queries we can run. The database connects to our cloud and returns results.

Purpose
    We can re-use this code when needed, either as functions in 'utils' or somewhere else

How-to
    Decide which queries you want to call under the section '// Run Example Queries Here'
    then 'node db_examples.js' to run the script
    Results are printed to the console

Current Issues
    Sending boolean values to the db

*/


// Connection parameters
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:QmEAuuqPj9qEJDkBt@cluster0.9a9u5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db_name = 'PetDatingApp-Local'

// Collections
const animalsCollection = 'Animals';
const sheltersCollection = 'Shelters';
const accountsCollection = 'Accounts';

// Queries: Animals
const animalsQuery1 = {name: 'Otis'}
const animalsQuery2 = {good_with_animals: true}
const animalsQuery3 = {age_descriptor: 'years'}

// Queries: Shelters
const sheltersQuery1 = {}
const sheltersQuery2 = {}
const sheltersQuery3 = {}

// Queries: Accounts
const accountsQuery1 = {}
const accountsQuery2 = {}
const accountsQuery3 = {}

// Print Results
function printQueryResult(funcName, collectionName, query, result) {
    console.log('\n\nFunction:\t%s\nCollection:\t%s\nQuery:\t\t%s\nResults:\n%s\n\n', funcName, collectionName, JSON.stringify(query), JSON.stringify(result, undefined, 4));
}


// Example functions

async function query_findOne(collectionName, query) {
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        const result = await collection.findOne(query);
        printQueryResult(query_findOne.name, collectionName, query, result);
    } finally {
        await client.close();
    }
}

async function query_find(collectionName, query) {
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        const result = await collection.find(query);
        printQueryResult(query.name, collectionName, query, result);
    } finally {
        await client.close();
    }
}


// Run Example Queries Here

query_findOne(animalsCollection, animalsQuery1);
query_findOne(animalsCollection, animalsQuery2);

//query_find(animalsCollection, animalsQuery3);

