import express, { Express } from 'express';
import { startDB } from './db.js';

const port = process.env.SERVER_PORT || 8080;

function configureApp(app: Express) {
  app.use(express.json());
}

function start() {
  const app = express();
  configureApp(app);
  startHttpServer(app);
  startDB();
}

function startHttpServer(app: Express) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

start();
