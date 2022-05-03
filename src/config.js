var config = {};

config.PROXY_URL = process.env.PROXY_URL || 'http://localhost:5000';
config.DB_INSTANCE = process.env.DB_INSTANCE || 'PetDatingApp-Local';
config.MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:QmEAuuqPj9qEJDkBt@cluster0.9a9u5.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    config
};