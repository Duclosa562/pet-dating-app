var config = {};

config.PROXY_URL = process.env.PROXY_URL || 'http://localhost:5000';
config.DB_INSTANCE = process.env.DB_INSTANCE || 'PetDatingApp-Local';

module.exports = {
    config
};