import { config } from 'dotenv';
config();
import app from './app';
import { MongoClient } from './configs/mongonect';
import { SERVER_PORT } from './config';

MongoClient();

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
