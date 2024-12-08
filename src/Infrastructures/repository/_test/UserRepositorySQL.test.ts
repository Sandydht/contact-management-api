import { PrismaClient } from "@prisma/client";
import UserTableTestHelper from "../../../../tests/UserTableTestHelper";
import UserRepositorySQL from "../UserRepositorySQL";
import InvariantError from "../../../Commons/exceptions/InvariantError";
import { RegisterUser } from "../../../Domains/users/entities/RegisterUser";

describe('UserRepositorySQL', () => {
  const prisma = new PrismaClient();

  afterEach(async () => {
    await UserTableTestHelper.cleanTable();
  });

  describe('verifyAvailableUsername function', () => {
    it('should throw InvariantError when username not available', async () => {
      await UserTableTestHelper.addUser({ username: 'test', password: 'password', name: 'test' });
      const userRepositorySQL = new UserRepositorySQL(prisma);
      await expect(userRepositorySQL.verifyAvailableUsername('test')).rejects.toThrow(InvariantError);
    });

    it('should not throw InvariantError when username available', async () => {
      const userRepositorySQL = new UserRepositorySQL(prisma);
      await expect(userRepositorySQL.verifyAvailableUsername('test')).resolves.not.toThrow(InvariantError);
    });
  });

  describe('addUser function', () => {
    it('should persist register user and return registered user correctly', async () => {
      const payload: RegisterUser = {
        username: 'test',
        password: 'password',
        name: 'test'
      };

      const userRepositorySQL = new UserRepositorySQL(prisma);
      
      await userRepositorySQL.addUser(payload);

      const user = await UserTableTestHelper.findUserByUsername('test');
      expect(user).toBeDefined();
    });

    it('should return registered user correctly', async () => {
      const payload: RegisterUser = {
        username: 'test',
        password: 'password',
        name: 'test'
      };

      const userRepositorySQL = new UserRepositorySQL(prisma);
      
      const addedUser = await userRepositorySQL.addUser(payload);
      expect(addedUser).toStrictEqual({
        username: 'test',
        name: 'test'
      });
    });
  });
});
