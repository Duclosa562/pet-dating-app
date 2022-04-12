const express = require('express');
const router = express.Router()

const Account = require('../models/Account');

router.get('/', (req, res) => {
    Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => console.log(err))
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
})
module.exports = router 