import express from "express";
import authMiddleware from "../middlewares/auth-middleware";
import UserController from "../controllers/user-controller";
import ContactController from "../controllers/contact-controller";

const apiRouter = express.Router();
apiRouter.use(authMiddleware);

// User APi
apiRouter.get("/api/users/current", UserController.getUser);
apiRouter.patch("/api/users/current", UserController.update);
apiRouter.delete("/api/users/current", UserController.logout);

// Contact API
apiRouter.post("/api/contacts", ContactController.create);

export default apiRouter;
