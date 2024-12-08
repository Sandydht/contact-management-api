import { PrismaClient } from "@prisma/client";
import UserRepository from "../../Domains/users/UserRepository";
import InvariantError from "../../Commons/exceptions/InvariantError";
import { RegisteredUser } from "../../Domains/users/entities/RegisteredUser";
import { RegisterUser } from "../../Domains/users/entities/RegisterUser";

class UserRepositorySQL extends UserRepository {
  private prisma: PrismaClient;
  private idGenerator: () => string;

  constructor(prisma: PrismaClient, idGenerator: () => string) {
    super();
    this.prisma = prisma;
    this.idGenerator = idGenerator;
  }

  async verifyAvailableUsername(username: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        username
      }
    });

    if (user) {
      throw new InvariantError('username is not found');
    }
  }

  async addUser(_registerUser: RegisterUser): Promise<RegisteredUser> {
    const addedUser = await this.prisma.user.create({
      data: _registerUser
    });

    return {
      username: addedUser.username,
      name: addedUser.name
    };
  }
}

export default UserRepositorySQL;
