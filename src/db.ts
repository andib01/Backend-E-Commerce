import mongodb from 'mongodb';
import { Express } from 'express';
import config from '../config.json' assert { type: 'json' };

const { MongoClient } = mongodb;
const url = `mongodb://${config.db.connect.host}:${config.db.connect.port.mongodb}`;
const client = new MongoClient(url, {
  auth: { username: config.db.connect.user, password: config.db.connect.password },
  authSource: config.db.connect.database
});

export async function startDB(app: Express, callback: any) {
  try {
    await client.connect();
    console.log('Connected to Database');
  } catch (err) {
    console.error('Could not connect to MongoDB: ', err);
    throw err;
  }
}

export async function closeDB() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    throw err;
  }
}
