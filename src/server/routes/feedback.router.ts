import { Router, Response, Request } from 'express';
import {PercentileModel} from "../models/percentile.model";


const feedbackRouter: Router = Router();

feedbackRouter.get('/', function (request:Request, response:Response) {
  console.log(request.body);
  // let feedbackData = request.body;
  let feedbackData = {
    "_id": "5805e0a9f36d2847090943cf",
    "gameMode": "flick",
    "avgDestructionTime": 1.2,
    "targetsDestructionPerc": 0.356,
    "accuracy": 0.54,
    "timestamp": "2015-12-03T17:00:00.000Z"
  }

  let q = PercentileModel.findOne({accuracy:{$lt:feedbackData.accuracy}}).sort({accuracy:-1}).lean();
  q.exec(function (err, docs: any) {
    if (err) return console.error(err);
    // console.log(docs);
    response.send("The Accuracy of " + feedbackData.accuracy + " is in the " + docs.percentile +" Percentile");
  });

});

export { feedbackRouter }
