import { Router } from 'express';
import { roomsController } from '../controllers/roomController.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';

export const roomsRouter = Router();

roomsRouter.get('/', ctrlWrapper(roomsController.getRooms));
roomsRouter.post('/add', ctrlWrapper(roomsController.addNewRoom));
