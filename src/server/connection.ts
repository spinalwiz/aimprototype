import * as mongoose from 'mongoose';

mongoose.connect('mongodb://aimdbuser:mongoDBPass+3+2+5@ds033986.mlab.com:33986/phtestdb');
(<any>mongoose).Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('DB Connected');
});

export{ mongoose};

