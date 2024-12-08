import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

const UserTableTestHelper = {
  async addUser(payload: { username: string, password: string, name: string }) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    return await prisma.user.create({
      data: {
        username: payload.username,
        password: hashedPassword,
        name: payload.name,
        token: uuid()
      }
    });
  },
  async findUserByUsername(username: string) {
    return await prisma.user.findFirst({
      where: {
        username,
      }
    });
  },
  async deleteUserByUsername(username: string) {
    return await prisma.user.delete({
      where: {
        username
      }
    });
  },
  async cleanTable() {
    return await prisma.user.deleteMany();
  }
};

export default UserTableTestHelper;
