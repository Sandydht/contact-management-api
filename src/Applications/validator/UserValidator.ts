import { RegisterUser } from "../../Domains/users/entities/RegisterUser";

class UserValidator {
  async registerUser(payload: RegisterUser): Promise<RegisterUser> {
    throw new Error('USER_VALIDATOR.METHOD_NOT_IMPLEMENTED');
  }
}

export default UserValidator;
