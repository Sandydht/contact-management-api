import { User } from "@prisma/client";
import { Request } from "express";

export interface CreateUserRequest {
  username: string;
  password: string;
  name: string;
}

export interface CreateUserResponse {
  username: string;
  name: string;
  token?: string;
}

export interface LoginUserRequest {
  username: string;
  password: string;
}

export type UpdateUserRequest = {
  name?: string;
  password?: string;
}

export interface UserRequest extends Request {
  user?: User
}

export function toUserResponse(user: User): CreateUserResponse {
  return {
    name: user.name,
    username: user.username
  }
}