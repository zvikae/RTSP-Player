var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email: String,
  rtsp_url: String,
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
