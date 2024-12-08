import ClientError from "../ClientError";
import NotFoundError from "../NotFoundError";

describe('NotFoundError', () => {
  it('should create error correctly', () => {
    const notFoundError = new NotFoundError('not found');

    expect(notFoundError).toBeInstanceOf(NotFoundError);
    expect(notFoundError).toBeInstanceOf(ClientError);
    expect(notFoundError).toBeInstanceOf(Error);
    expect(notFoundError.statusCode).toBe(404);
    expect(notFoundError.name).toBe('NotFoundError');
    expect(notFoundError.message).toBe('not found');
  });
});
