const mongoose = require('mongoose');

const videomeetSchema = new mongoose.Schema({
  videomeetId: String,
  createDate: Date,
  videomeetDate: Date,
  phone: String,
});
module.exports = {videomeetSchema};