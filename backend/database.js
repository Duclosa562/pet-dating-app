const mongoose = require('mongoose');
const connection = "mongodb+srv://admin:QmEAuuqPj9qEJDkBt@cluster0.9a9u5.mongodb.net/PetDatingApp-Local?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log('DB connection not successful: ' + err));