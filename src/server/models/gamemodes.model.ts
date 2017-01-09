import {mongoose} from '../connection';

let gamemodesSchema = new mongoose.Schema({
  _id: Number,
  gamemode: String,
  level: Number,
  name: String,
  imageurl: String,
  description: String
});

let GameModeModel = (<any>mongoose).model('GameMode', gamemodesSchema);

export{GameModeModel};
;
