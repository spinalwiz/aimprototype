import {mongoose} from '../connection';

let percentileSchema = new mongoose.Schema({
  _id: Number,
  percentile: Number,
  accuracy: Number,
  avgDestructionTime: Number,
  targetsDestructionPerc: Number
});

let PercentileModel = mongoose.model('percentile', percentileSchema);
export {PercentileModel};

