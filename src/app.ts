import express, { Express } from 'express';

const port = 8080;

function configureApp(app: Express) {
  app.use(express.json());
}

function start() {
  const app = express();
  configureApp(app);
  startHttpServer(app);
}

function startHttpServer(app: Express) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

start();
