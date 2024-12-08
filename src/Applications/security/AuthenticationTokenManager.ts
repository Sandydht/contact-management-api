import { JwtPayload } from "../../Domains/authentications/entities/JwtPayload";

class AuthenticationTokenManager {
  async createAccessToken(payload: JwtPayload): Promise<string> {
    throw new Error('AUTHENTICATION_TOKEN_MANAGER.MEHTOD_NOT_IMPLEMENTED');
  }

  async decodePayload(token: string): Promise<JwtPayload> {
    throw new Error('AUTHENTICATION_TOKEN_MANAGER.MEHTOD_NOT_IMPLEMENTED');
  }
}

export default AuthenticationTokenManager;
