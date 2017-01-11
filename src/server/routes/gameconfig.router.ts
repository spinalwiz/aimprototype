import { Router, Response, Request } from 'express';
import {GameConfigModel} from '../models/gameconfig.model';

const gameConfigRouter: Router = Router();

gameConfigRouter.get('/:mode/:level', function (req: Request, res: Response) {
  const m = req.params.mode;
  const l = req.params.level;

  let q = GameConfigModel.findOne({mode:m,level:l}).lean().exec(function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

export { gameConfigRouter }
