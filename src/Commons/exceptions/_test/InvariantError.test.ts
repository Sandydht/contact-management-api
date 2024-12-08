import ClientError from "../ClientError";
import InvariantError from "../InvariantError";

describe('InvariantError', () => {
  it('should create an error correctly', () => {
    const invariantError = new InvariantError('an error occurs');

    expect(invariantError).toBeInstanceOf(InvariantError);
    expect(invariantError).toBeInstanceOf(ClientError);
    expect(invariantError).toBeInstanceOf(Error);
    expect(invariantError.statusCode).toBe(400);
    expect(invariantError.name).toBe('InvariantError');
    expect(invariantError.message).toBe('an error occurs');
  });
});
