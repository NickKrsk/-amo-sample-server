const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;
const connection = mongoose.createConnection(
    config.get('mongodb'), {});
const {authDataSchema} = require('./auth-data');
const AuthData = connection.model('authdata', authDataSchema);

module.exports = {
    AuthData,
};