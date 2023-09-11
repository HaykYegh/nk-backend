import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import sendMailerRoute from './sendMailer/index.js';

dotenv.config();

const app = express();

app.use(cookieParser());
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/sendMailer', sendMailerRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
