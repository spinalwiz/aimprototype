let mongoose = require('./connection');

let bulletdataSchema = mongoose.Schema({
  user: { type: Number, ref: 'User' },
  game: { type: Number, ref: 'GameData' },
  type: String,
  result: String,
  timestamp: Date,
  reactionTime: Number
});

module.exports = mongoose.model('BulletData', bulletdataSchema, 'bulletdata');



