import express from "express";
import authMiddleware from "../middlewares/auth-middleware";
import UserController from "../controllers/UserController";

const apiRouter = express.Router();
apiRouter.use(authMiddleware);

// User APi
apiRouter.get("/api/users/current", UserController.getUser);
apiRouter.patch("/api/users/current", UserController.update);
apiRouter.delete("/api/users/current", UserController.logout);

export default apiRouter;
