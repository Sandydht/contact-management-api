import InvariantError from "../../Commons/exceptions/InvariantError";
import { RegisteredUser } from "./entities/RegisteredUser";
import { RegisterUser } from "./entities/RegisterUser";

class UserRepository {
  async addUser(_registerUser: RegisterUser): Promise<RegisteredUser> {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyAvailableUsername(username: string): Promise<any> {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getPasswordByUsername(username: string): Promise<string> {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getIdByUsername(username: string): Promise<string> {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

export default UserRepository;
