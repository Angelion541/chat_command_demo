import express from 'express';
import { authController } from "../controllers/authController.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

export const authRouter = express.Router();

authRouter.post('/', (req, res) => {
  res.send('Auth');
});

authRouter.post("/signup", ctrlWrapper(authController.signup));
