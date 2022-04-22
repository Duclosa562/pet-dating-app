/*

DATABASE QUERY EXAMPLES

Summary
    This code serves as an example of the queries we can run in our React app.
    This file contains everything you need. Nothing is imported, all code is in this file.
    This code can be run as-is. Making changes to this file is purely optional.
    Results print to the console to easily see results & follow the code.

    -> Run the file with "node db_examples.js"

Purpose
    We can re-use this code when needed, either as functions in 'utils' or somewhere else

How-to
    1. View the queries at the bottom of this document. Decide which ones you want to run.
    2. node db_examples.js

Current Issues
    None

*/

/**************************************
    GLOBAL CONSTANTS
***************************************/

// Connection parameters
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:QmEAuuqPj9qEJDkBt@cluster0.9a9u5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db_name = 'PetDatingApp-Local';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Collections
const animalsCollection = 'Animals';
const sheltersCollection = 'Shelters';
const accountsCollection = 'Accounts';

/**************************************
    QUERIES
***************************************/

// Animals
const animalsQuery1 = {name: 'Otis'}
const animalsQuery2 = {good_with_animals: true}
const animalsQuery3 = {age_descriptor: 'years'}
const animalsQuery4 = {shelter_oid: '6254368a11c4ca8be3b22ad1'}

// Shelters
const sheltersQuery1 = {}
const sheltersQuery2 = {}
const sheltersQuery3 = {}

// Accounts
const accountsQuery1 = {}
const accountsQuery2 = {}
const accountsQuery3 = {}

// Animals
const animalRecord1 = {
    "name": "Roxy",
    "breed": "Dog",
    "good_with_animals": false,
    "good_with_children": true,
    "must_be_leashed": true,
    "availability": "Not Available",
    "description": "American Dingo",
    "date_created": "04/19/2022",
    "age": 12,
    "age_descriptor": "years",
    "filesystem_location": "src/images/some_oid.jpeg",
    "shelter_oid": "6254368a11c4ca8be3b22ad1"
}

const animalRecord2 = {
    "name": "Mike",
    "breed": "Cat",
    "good_with_animals": false,
    "good_with_children": true,
    "must_be_leashed": true,
    "availability": "Adopted",
    "description": "Fat cat",
    "date_created": "04/19/2005",
    "age": 3,
    "age_descriptor": "years",
    "filesystem_location": "src/images/some_oid.jpeg",
    "shelter_oid": "6254368a11c4ca8be3b22ad1"
}

// Shelters
const shelterRecord1 = {}
const shelterRecord2 = {}

// Accounts
const accountRecord1 = {}
const accountRecord2 = {}

/**************************************
    PRINT Results
***************************************/

function printInsertResult(funcName, collectionName, record, result) {
    console.log('\n\nFunction:\t%s\nCollection:\t%s\nInserted:\t%s\nInsertedId:\t%s\nRecord:\n%s\n\n', funcName, collectionName, result.acknowledged, result.insertedId, record);
}

function printQueryResult(funcName, collectionName, query, result) {
    console.log('\n\nFunction:\t%s\nCollection:\t%s\nQuery:\t\t%s\nResults:\n%s\n\n', funcName, collectionName, JSON.stringify(query), JSON.stringify(result, undefined, 4));
}

async function printFindManyResult(funcName, collectionName, query, results) {
    console.log('\n\nFunction:\t%s\nCollection:\t%s\nQuery:\t\t%s\nResults:\n%s\n\n', funcName, collectionName, JSON.stringify(query));
}

function printUpdateOneResult(funcName, collectionName, query, update, result) {
    console.log('\n\nFunction:\t%s\nCollection:\t%s\nQuery:\n%s\nUpdate\n%s\nResults:\n%s\n\n', funcName, collectionName, JSON.stringify(query, undefined, 4), JSON.stringify(update, undefined, 4), JSON.stringify(result, undefined, 4));
}

function printDeleteResult(funcName, collectionName, result, query) {
    console.log('\n\nFunction:\t%s\nCollection:\t%s\nResponse:\t%s\nQuery:\n%s\n\n', funcName, collectionName, result, JSON.stringify(query, undefined, 4));
}

function printError(funcName, err) {
    console.log('Error occured with function ' + funcName);
    console.log(err);
}

/**************************************
    CREATE Queries
***************************************/

// returns the inserted record
async function query_insertOne(collectionName, record) {
    var result;
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        result = await collection.insertOne(record);
        printInsertResult(query_insertOne.name, collectionName, record, result);
    } catch (err) {
        printError(query_insertOne.name, err);
    } finally {
        await client.close();
    }
    return record;  // <- record is updated with _id attribute when successful
}

/***************************************
    READ Queries
***************************************/

// returns the first record matching <query> from <collection>
async function query_findOne(collectionName, query) {
    var result;
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        result = await collection.findOne(query);
        printQueryResult(query_findOne.name, collectionName, query, result);
    } finally {
        await client.close();
    }
    return result;
}

// returns all records matching <query> from <collection>
async function query_findMany(collectionName, query) {
    var results = [];
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        var cursor = await collection.find(query);
        cursor.forEach((item) => {
            results.push(item);
        });
        await printFindManyResult(query_findMany.name, collectionName, query, results);
    } finally {
        await client.close();
    }
    return results;
}

/***************************************
    UPDATE Queries
***************************************/

// Update a record that matches <query> from <collection>. Update attributes defined in <update>
//  - the format of <update>: {$set: {attribute: value, .. }}
//  - for now, options are not used
async function query_updateOne(collectionName, query, update) {
    var result;
    try {
        const options = {};
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        result = await collection.updateOne(query, update, options);
        await printUpdateOneResult(query_updateOne.name, collectionName, query, update, result);
    } finally {
        await client.close();
    }
    return result;
}

/***************************************
    DELETE Queries
***************************************/

// deletes the first record matching <query> from <collection>
async function query_deleteOne(collectionName, query) {
    var result;
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection(collectionName);
        result = await collection.deleteOne(query);
        printDeleteResult(query_deleteOne.name, collectionName, result, query);
    } finally {
        await client.close();
    }
    return result;
}

/***************************************
    Example Query Usage
***************************************/

async function executeQueries() {

    // CREATE //
    var newAnimalRecord1 = await query_insertOne(animalsCollection, animalRecord1);
    var newAnimalRecord2 = await query_insertOne(animalsCollection, animalRecord2);

    // READ //
    await query_findOne(animalsCollection, animalsQuery1);
    await query_findOne(animalsCollection, animalsQuery3);
    await query_findOne(animalsCollection, {"_id": newAnimalRecord1._id}); // find by id
    await query_findMany(animalsCollection, animalsQuery4);

    // UPDATE //
    const animalUpdate1 = {$set: {availability: 'Adopted'}}
    const animalUpdate2 = {$set: {description: 'Updated description', good_with_children: false}}

    await query_updateOne(animalsCollection, newAnimalRecord1, animalUpdate1);
    await query_updateOne(animalsCollection, {_id: newAnimalRecord2._id}, animalUpdate2);

    // DELETE //
    await query_deleteOne(animalsCollection, newAnimalRecord1); // this fails because all parameters in the query must match. And we updated the record
    await query_deleteOne(animalsCollection, {_id: newAnimalRecord2._id}); // delete by id
}

executeQueries();

module.exports = {
    query_insertOne,
    query_findOne,
    query_findMany,
    query_deleteOne
};