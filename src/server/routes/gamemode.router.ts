import { Router, Response, Request } from 'express';
import {GameModeModel} from '../models/gamemodes.model';

const gameModeRouter: Router = Router();

gameModeRouter.get('/', function (req, res) {
  GameModeModel.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

export { gameModeRouter }
