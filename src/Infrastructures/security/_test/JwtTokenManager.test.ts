import { JwtPayload } from "../../../Domains/authentications/entities/JwtPayload";
import JwtTokenManager from "../JwtTokenManager";
import jwt from "jsonwebtoken";

describe('JwtTokenManager', () => {
  describe('createAccessToken function', () => {
    it('should create access token correctly', async () => {
      const payload: JwtPayload = {
        username: 'test'
      };

      const spyJwt = jest.spyOn(jwt, 'sign');
      const jwtTokenManager = new JwtTokenManager(jwt);
      const accessToken = await jwtTokenManager.createAccessToken(payload);

      expect(accessToken).not.toEqual(payload.username);
      expect(spyJwt).toHaveBeenCalledWith(payload, 'access_token_key');
    });
  });

  describe('decodePayload function', () => {
    it('should decode payload correctly', async () => {
      const payload: JwtPayload = {
        username: 'test'
      };

      const jwtTokenManager = new JwtTokenManager(jwt);
      const accessToken = await jwtTokenManager.createAccessToken(payload);

      const decodedToken = await jwtTokenManager.decodePayload(accessToken);
      expect(decodedToken).toHaveProperty('username');
    });
  });
});
