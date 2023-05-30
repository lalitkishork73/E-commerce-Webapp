import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());




app.listen(process.env.PORT||3000, () => console.log('Listening on port 3000'))