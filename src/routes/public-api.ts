import express from "express";
import UserController from "../controllers/user-controller";

const publicRouter = express.Router();
publicRouter.post('/api/users', UserController.registerUser);
publicRouter.post('/api/users/login', UserController.loginUser);

export default publicRouter;
