import AuthenticationTokenManager from "../AuthenticationTokenManager";

describe('AuthenticationTokenManager interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    const authenticationTokenManager = new AuthenticationTokenManager();

    expect(authenticationTokenManager).toBeInstanceOf(AuthenticationTokenManager);
    await expect(authenticationTokenManager.createAccessToken({ username: '' })).rejects.toThrow('AUTHENTICATION_TOKEN_MANAGER.MEHTOD_NOT_IMPLEMENTED');
    await expect(authenticationTokenManager.decodePayload('')).rejects.toThrow('AUTHENTICATION_TOKEN_MANAGER.MEHTOD_NOT_IMPLEMENTED');
  });
});
