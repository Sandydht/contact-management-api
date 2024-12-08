import bcrypt from "bcrypt";
import BcryptPasswordHash from "../BcryptPasswordHash";

describe('BcryptPasswordHash', () => {
  describe('hash function', () => {
    it('should encrypt password correctly', async () => {
      const spyHash = jest.spyOn(bcrypt, 'hash');
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt, 10);

      const encryptedPassword = await bcryptPasswordHash.hash('password');
      
      expect(encryptedPassword).not.toEqual('password');
      expect(spyHash).toHaveBeenCalledWith('password', 10);
    });
  });
}); 
