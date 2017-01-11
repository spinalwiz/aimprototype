import {mongoose} from '../connection';

let gameconfigSchema = new mongoose.Schema({
  _id: Number,
  mode: String,
  level: Number,
  return_to_centre: Boolean,
  num_targets: Number,
  shots_per_target: Number,
  target_lifetime: Number,
  target_size: Number,
  target_distance: Number,
  target_moving: String,
  target_speed: Number,
  time_between_targets: Number,
  time_between_randomise: Boolean,
  target_health: Boolean
});

let GameConfigModel = mongoose.model('GameConfigs', gameconfigSchema);
export {GameConfigModel};

