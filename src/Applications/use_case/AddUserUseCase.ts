import { RegisteredUser } from "../../Domains/users/entities/RegisteredUser";
import { RegisterUser } from "../../Domains/users/entities/RegisterUser";
import UserRepository from "../../Domains/users/UserRepository";
import PasswordHash from "../security/PasswordHash";

class AddUserUseCase {
  private userRepository: UserRepository;
  private passwordHash: PasswordHash;

  constructor(payload: { userRepository: UserRepository, passwordHash: PasswordHash }) {
    this.userRepository = payload.userRepository;
    this.passwordHash = payload.passwordHash;
  } 

  async execute(payload: RegisterUser): Promise<RegisteredUser> {
    await this.userRepository.verifyAvailableUsername(payload.username);
    payload.password = await this.passwordHash.hash(payload.password);
    const registeredUser = await this.userRepository.addUser(payload);
    return registeredUser as RegisteredUser;
  }
}

export default AddUserUseCase;
