import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { authRouter, roomsRouter, privatsRouter } from './routes/index.js';
import { globalHeaders } from './middlewares/globalHeaders.js';
import { errorsMidleware } from './middlewares/errors.js';

const { MONGODB_HOST_URI, SERVER_PORT } = process.env;
const PORT = SERVER_PORT || 8080;

mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_HOST_URI, () => console.log('Connected to DB'));

const server = express();
const formatsLogger = server.get('env') === 'development' ? 'dev' : 'short';

server.use(logger(formatsLogger));
server.use(globalHeaders);
server.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
server.use(express.json());

server.use('/auth', authRouter);
server.use('/rooms', roomsRouter);
server.use('/private', privatsRouter);


server.get('/', (req, res, next) => {
  res.send('DEMO CHAT API');
});

server.use(errorsMidleware.notFoundMessage);
server.use(errorsMidleware.internalServerMessage)

server.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
