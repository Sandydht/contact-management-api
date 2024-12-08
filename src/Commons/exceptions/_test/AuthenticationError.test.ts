import AuthenticationError from "../AuthenticationError";
import ClientError from "../ClientError";

describe('AuthenticationError', () => {
  it('should create error correctly', () => {
    const authenticationError = new AuthenticationError('authentication error');
    
    expect(authenticationError).toBeInstanceOf(AuthenticationError);
    expect(authenticationError).toBeInstanceOf(ClientError);
    expect(authenticationError).toBeInstanceOf(Error);
    expect(authenticationError.statusCode).toBe(401);
    expect(authenticationError.name).toBe('AuthenticationError');
    expect(authenticationError.message).toBe('authentication error');
  });
});
