import dotenv from 'dotenv';
dotenv.config();

export const key_id = process.env.KEY_ID;
export const key_secret = process.env.KEY_SECRET;
export const mongo_url = process.env.MONGO_URL;
export const jwt_secret = process.env.JWT_SECRET;

export const MONGO_USERNAME = process.env.MONGO_USERNAME;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.o2wavxe.mongodb.net/ProjectDB?retryWrites=true&w=majority`;

export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;
