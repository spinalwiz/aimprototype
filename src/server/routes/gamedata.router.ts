import { Router, Response, Request } from 'express';
import {GameDataModel} from "../models/gamedata.model";

const gameDataRouter: Router = Router();

gameDataRouter.get('/', function (req, res) {
  GameDataModel.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

gameDataRouter.post('/add', function (req, res) {
  console.log(req.body);
  let newGameData = new GameDataModel(req.body);
  newGameData.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

export { gameDataRouter }
