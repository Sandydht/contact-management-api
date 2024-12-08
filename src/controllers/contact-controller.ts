import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user-model";
import { CreateContactRequest } from "../models/contact-model";
import ContactService from "../services/contact-service";
import logger from "../applications/logging";

class ContactController {
  static async create(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: CreateContactRequest = req.body;
      const response = await ContactService.create(req.user!, request);
      logger.debug("response : " + JSON.stringify(response));
      res.status(200).json({
        data: response
      });
    } catch (e) {
      next(e);
    }
  }
}

export default ContactController;
