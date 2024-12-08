import bcrypt from "bcrypt";
import { CreateUserRequest, CreateUserResponse, LoginUserRequest, toUserResponse, UpdateUserRequest } from "../models/user-model";
import { prismaClient } from "../applications/database";
import Validation from "../validators/validation";
import UserValidator from "../validators/user-validator";
import ResponseError from "../errors/response-error";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

class UserService {
  static async createUser(payload: CreateUserRequest): Promise<CreateUserResponse> {
    const registerUserPayload = Validation.validate(UserValidator.REGISTER, payload);
    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: registerUserPayload.username
      }
    });

    if (totalUserWithSameUsername !== 0) {
      throw new ResponseError(400, 'Username already exist');
    }

    registerUserPayload.password = await bcrypt.hash(registerUserPayload.password, 10);

    const registeredUser = await prismaClient.user.create({
      data: registerUserPayload
    });

    return toUserResponse(registeredUser);
  }

  static async login(request: LoginUserRequest): Promise<CreateUserResponse> {
    const loginUserPayload = Validation.validate(UserValidator.LOGIN, request);

    let user = await prismaClient.user.findUnique({
      where: {
        username: loginUserPayload.username
      }
    });

    if (!user) {
      throw new ResponseError(401, "Username or password is wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginUserPayload.password, user.password);
    if (!isPasswordValid) {
      throw new ResponseError(401, "Username or password is wrong");
    }

    const token = await jwt.sign(loginUserPayload.username, 'access_token_key');
    user = await prismaClient.user.update({
      where: {
        username: loginUserPayload.username
      },
      data: {
        token
      }
    });

    const response = toUserResponse(user);
    response.token = user.token!;
    return response;
  }

  static async get(user: User): Promise<CreateUserResponse> {
    return toUserResponse(user);
  }

  static async update(user: User, request: UpdateUserRequest): Promise<CreateUserResponse> {
    const updateRequest = Validation.validate(UserValidator.UPDATE, request);

    if (updateRequest.name) {
      user.name = updateRequest.name;
    }

    if (updateRequest.password) {
      user.password = await bcrypt.hash(updateRequest.password, 10);
    }

    const result = await prismaClient.user.update({
      where: {
        username: user.username
      },
      data: user
    });

    return toUserResponse(result);
  }

  static async logout(user: User): Promise<CreateUserResponse> {
    const result = await prismaClient.user.update({
      where: {
        username: user.username
      },
      data: {
        token: null
      }
    });

    return toUserResponse(result);
  }
}

export default UserService;
