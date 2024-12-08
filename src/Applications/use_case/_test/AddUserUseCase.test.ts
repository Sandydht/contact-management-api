import InvariantError from "../../../Commons/exceptions/InvariantError";
import { RegisterUser } from "../../../Domains/users/entities/RegisterUser";
import UserRepository from "../../../Domains/users/UserRepository";
import PasswordHash from "../../security/PasswordHash";
import AddUserUseCase from "../AddUserUseCase";

describe('AddUserUseCase', () => {
  it('should orchestrating the add user action correctly', async () => {
    const useCasePayload: RegisterUser = {
      username: 'test',
      password: 'password',
      name: 'test'
    };

    const mockUserRepository = new UserRepository();
    const mockPasswordHash = new PasswordHash();

    mockUserRepository.verifyAvailableUsername = jest.fn(() => Promise.resolve(InvariantError));
    mockPasswordHash.hash = jest.fn(() => Promise.resolve('encrypted_password'));
    mockUserRepository.addUser = jest.fn(() => Promise.resolve({
      username: 'test',
      name: 'test'
    }));

    const addUserUseCase = new AddUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash
    });

    const registeredUser = await addUserUseCase.execute(useCasePayload);

    expect(mockUserRepository.verifyAvailableUsername).toHaveBeenCalledWith(useCasePayload.username);
    expect(mockPasswordHash.hash).toHaveBeenCalledWith('password');
    expect(mockUserRepository.addUser).toHaveBeenCalledWith({
      ...useCasePayload,
      password: 'encrypted_password'
    });
    expect(registeredUser).toStrictEqual({
      username: 'test',
      name: 'test'
    });
  });
});
