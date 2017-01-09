import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import * as compression from 'compression';
import * as morgan from 'morgan';


//Set up DB
// import {mongoose} from "./connection";
import {gameModeRouter } from "./routes/gamemode.router";
import {gameDataRouter} from "./routes/gamedata.router";
import {feedbackRouter} from "./routes/feedback.router";
import {percentileRouter} from "./routes/percentile.router";

const app: express.Application = express();

app.options('*', cors()); // include before other routes
app.use(cors());
app.use(morgan('dev'));
app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// api routes
app.use('/api/gamemodes', gameModeRouter);
app.use('/api/gamedata', gameDataRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/percentiles', percentileRouter);




if (app.get('env') === 'production') {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, '/../client')));

}

if (app.get('env') === 'development') {
  app.use('/', express.static(__dirname + '/../client/assets'));
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
  let err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

// all other routes are handled by Angular
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

export { app }
