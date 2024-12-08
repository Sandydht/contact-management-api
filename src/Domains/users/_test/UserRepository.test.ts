import UserRepository from "../UserRepository";

describe('UserRepository interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    const userRepository = new UserRepository();

    expect(userRepository).toBeInstanceOf(UserRepository);
    await expect(userRepository.addUser({ username: '', password: '', name: '' })).rejects.toThrow('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrow('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.getPasswordByUsername('')).rejects.toThrow('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.getIdByUsername('')).rejects.toThrow('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
