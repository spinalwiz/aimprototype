import {mongoose} from '../connection';

let gamedataSchema = new mongoose.Schema({
  _id: Number,
  user: { type: Number, ref: 'User' },
  gameMode: String,
  gameLevel: Number,
  avgReactionTime: Number,
  accuracy: Number,
  timestamp: Date
});

let GameDataModel = mongoose.model('GameData', gamedataSchema);
export {GameDataModel};

