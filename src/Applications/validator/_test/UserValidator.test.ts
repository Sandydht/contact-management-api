import UserValidator from "../UserValidator";

describe('UserValidator interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    const userValidator = new UserValidator();

    expect(userValidator).toBeInstanceOf(UserValidator);
    await expect(userValidator.registerUser({ username: '', password: '', name: '' })).rejects.toThrow('USER_VALIDATOR.METHOD_NOT_IMPLEMENTED');
  });
});
