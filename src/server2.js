import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import { authRouter } from './routes/authRouter.js';

const { MONGODB_HOST_URI, SEVER_PORT } = process.env;
const PORT = SEVER_PORT || 8080;

const server = express();

mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_HOST_URI);

server.use(express.json());
server.use('/auth', authRouter);


server.get('/', (req, res, next) => {
  res.send('Hello');
});

server.listen(PORT, () => {
	console.log(`App running on http://localhost:${PORT}`)
})
