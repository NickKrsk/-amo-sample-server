const mongoose = require('mongoose');

const authDataSchema = new mongoose.Schema({
  clientId: String,
  code: String,
  accessToken: String,
  refreshToken: String,
});
module.exports = {authDataSchema};