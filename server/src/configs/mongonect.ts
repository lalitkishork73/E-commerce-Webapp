/* import dotenv from 'dotenv';
dotenv.config(); */
import mongoose from 'mongoose';
import { MONGO_URL } from '../config';

export const MongoConfig = {
    mongo: {
        url: MONGO_URL
    }
};

export const MongoClient = async () => {
    mongoose.set('strictQuery', false);
    mongoose
        .connect(MongoConfig.mongo.url, { retryWrites: true, w: 'majority' })
        .then(() => {
            console.log('Mongodb connected');
        })
        .catch((err: any) => {
            console.log(err);
            process.exit(1);
        });
};
