import express from 'express';
import cors from 'cors';
import { config } from './configs/mongonect';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
mongoose.set('strictQuery', false);
export default mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((err) => console.log(err));


app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'));
