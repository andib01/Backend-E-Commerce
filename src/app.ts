import express, { Express } from 'express';
import config from '../config.json' assert { type: 'json' };
import mongoose from 'mongoose';

const port = 8080;
const mongoAuth = `${config.db.connect.user}:${config.db.connect.password}`;
const mongoDBUrl = `${mongoAuth}@${config.db.connect.host}:${config.db.connect.port.mongodb}/${config.db.connect.database}`;

function configureApp(app: Express) {
  app.use(express.json());
}

function start() {
  const app = express();
  configureApp(app);
  startHttpServer(app);
  mongoose.connect(`${config.db.use}://${mongoDBUrl}`);
}

function startHttpServer(app: Express) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

start();
