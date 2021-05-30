import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';

import './container';
import createConnection from './database';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));
app.use(router);

export { app };
