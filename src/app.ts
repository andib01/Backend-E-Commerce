/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Express } from 'express';
import { startDB } from './db.js';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
import addTest from './tests/productTests.js';
dotenv.config({ path: '.env' });
const port = process.env.SERVER_PORT || 8080;

function configureApp(app: Express) {
  app.use(express.json());
}

function start() {
  const app = express();
  configureApp(app);
  startHttpServer(app);
  startDB();

  //Insert Tests here
  addTest();
}

function startHttpServer(app: Express) {
  app.use('/api', productRoutes);
  app.get('/', (req, res) => {
    res.send('Testing send');
  });
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

start();
