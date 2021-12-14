const mongoose = require('mongoose');

const authDataSchema = new mongoose.Schema({
  clientId: {
    type: String,
    unique: true,
  },
  code: String,
  accessToken: String,
  refreshToken: String,
});
module.exports = {authDataSchema};