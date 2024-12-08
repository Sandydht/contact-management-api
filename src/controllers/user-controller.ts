import { NextFunction, Request, Response } from "express";
import { CreateUserRequest, LoginUserRequest, UpdateUserRequest, UserRequest } from "../models/user-model";
import UserService from "../services/user-service";

class UserController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const requestPayload: CreateUserRequest = req.body;
      const response = await UserService.createUser(requestPayload);
      res.status(200).json({
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const requestPayload: LoginUserRequest = req.body;
      const response = await UserService.login(requestPayload);
      res.status(200).json({
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUser(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.get(req.user!);
      res.status(200).json({
        data: response
      })
    } catch (error) {
      next(error);
    }
  }

  static async update(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: UpdateUserRequest = req.body;
      const response = await UserService.update(req.user!, request);
      res.status(200).json({
        data: response
      })
    } catch (error) {
      next(error);
    }
  }

  static async logout(req: UserRequest, res: Response, next: NextFunction) {
    try {
      await UserService.logout(req.user!);
      res.status(200).json({
        data: "OK"
      })
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
