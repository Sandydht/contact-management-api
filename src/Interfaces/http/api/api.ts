import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

router.use('/api/users', UserController);

export default router;