var config = {};


// Set Proxy URL
if (!process.env.PROXY_URL) {
    console.log('Loaded .env = PROXY_URL');
    config.PROXY_URL = 'http://localhost:5000';
} else {
    config.PROXY_URL = process.env.PROXY_URL;
}

// Set DB Instance
if (!process.env.DB_INSTANCE) {
    console.log('Loaded .env = DB_INSTANCE');
    config.DB_INSTANCE = 'PetDatingApp-Local';
} else {
    config.DB_INSTANCE = process.env.DB_INSTANCE;
}

// Set MongoDB Instance
if (!process.env.MONGODB_URI) {
    console.log('Loaded .env = MONGODB_URI');
    config.MONGODB_URI = 'mongodb+srv://admin:QmEAuuqPj9qEJDkBt@cluster0.9a9u5.mongodb.net/test?retryWrites=true&w=majority';
} else {
    config.MONGODB_URI = process.env.MONGODB_URI;
}

module.exports = {
    config
};