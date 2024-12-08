import { createContainer } from "instances-container";
import UserRepository from "../Domains/users/UserRepository";
import UserRepositorySQL from "./repository/UserRepositorySQL";
import { v4 as uuidV4 } from "uuid";
import AddUserUseCase from "../Applications/use_case/AddUserUseCase";
import PasswordHash from "../Applications/security/PasswordHash";
import prismaClient from "./database/prismaClient";

const container = createContainer();

container.register([
  {
    key: UserRepository.name,
    Class: UserRepositorySQL,
    parameter: {
      dependencies: [
        {
          concrete: prismaClient,
        },
        {
          concrete: uuidV4,
        },
      ],
    },
  },
]);

container.register([
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name,
        },
      ],
    },
  },
]);

export default container;
