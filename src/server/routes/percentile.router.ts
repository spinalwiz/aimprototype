import { Router, Response, Request } from 'express';

const percentileRouter: Router = Router();

percentileRouter.get('/', function (request:Request, response:Response) {
  response.json(
    [{"percentile":10,"accuracy":0.1,"targetsDestructionPerc":0.7,"avgDestructionTime":0.6},
      {"percentile":20,"accuracy":0.2,"targetsDestructionPerc":0.8,"avgDestructionTime":0.7},
      {"percentile":30,"accuracy":0.3,"targetsDestructionPerc":0.82,"avgDestructionTime":0.8},
      {"percentile":40,"accuracy":0.35,"targetsDestructionPerc":0.83,"avgDestructionTime":0.85},
      {"percentile":50,"accuracy":0.4,"targetsDestructionPerc":0.84,"avgDestructionTime":0.9},
      {"percentile":60,"accuracy":0.45,"targetsDestructionPerc":0.85,"avgDestructionTime":0.95},
      {"percentile":70,"accuracy":0.5,"targetsDestructionPerc":0.86,"avgDestructionTime":1},
      {"percentile":80,"accuracy":0.6,"targetsDestructionPerc":0.87,"avgDestructionTime":1.1},
      {"percentile":90,"accuracy":0.7,"targetsDestructionPerc":0.88,"avgDestructionTime":1.2},
      {"percentile":100,"accuracy":0.8,"targetsDestructionPerc":0.9,"avgDestructionTime":1.3}]

  );

});

export { percentileRouter }
