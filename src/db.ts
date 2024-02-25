import config from '../config.json' assert { type: 'json' };
import mongoose from 'mongoose';

const mongoAuth = `${config.db.connect.user}:${config.db.connect.password}`;
const mongoDBUrl = `${mongoAuth}@${config.db.connect.host}:${config.db.connect.port.mongodb}/`;

export async function startDB() {
  try {
    await mongoose.connect(`${config.db.use}://${mongoDBUrl}`);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Could not connect to MongoDB');
    throw err;
  }
}
