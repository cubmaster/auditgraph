/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as cors  from 'cors';
import * as express from 'express';
import * as path from 'path';
import config from './app/config/config';
import routes from './app/config/routes';
import MongooseConfig from "./app/config/mongoose";
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const env = process.env.NODE_ENV  || 'development';


if (env == 'development'){

  app.use(cors());


}
const mongooseConfig = new MongooseConfig(config[env]);
routes(app);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening on ' + port);
});
server.on('error', console.error);
