import AuthorizationError from "../AuthorizationError";
import ClientError from "../ClientError";

describe('AuthorizationError', () => {
  it('should create error correctly', () => {
    const authorizationError = new AuthorizationError('unauthorized');

    expect(authorizationError).toBeInstanceOf(AuthorizationError);
    expect(authorizationError).toBeInstanceOf(ClientError);
    expect(authorizationError).toBeInstanceOf(Error);
    expect(authorizationError.statusCode).toBe(403);
    expect(authorizationError.name).toBe('AuthorizationError');
    expect(authorizationError.message).toBe('unauthorized');
  });
});
