import { User } from "@prisma/client";
import { prismaClient } from "../applications/database";
import logger from "../applications/logging";
import Validation from "../validators/validation";
import { ContactResponse, CreateContactRequest, toContactResponse } from "../models/contact-model";
import ContactValidator from "../validators/contact-validator";

class ContactService {
  static async create(user: User, request: CreateContactRequest): Promise<ContactResponse> {
    const createRequest = Validation.validate(ContactValidator.CREATE, request);

    const record = {
      ...createRequest,
      ...{ username: user.username }
    };

    const contact = await prismaClient.contact.create({
      data: record
    });

    logger.debug("record : " + JSON.stringify(contact));
    return toContactResponse(contact);
  }
}

export default ContactService;
