import AuthenticationTokenManager from "../../Applications/security/AuthenticationTokenManager";
import { JwtPayload } from "../../Domains/authentications/entities/JwtPayload";

class JwtTokenManager extends AuthenticationTokenManager {
  public jwt: any;

  constructor(jwt: any) {
    super();
    this.jwt = jwt;
  }

  async createAccessToken(payload: JwtPayload): Promise<string> {
    const accessToken = await this.jwt.sign(payload, 'access_token_key');
    return accessToken;
  }

  async decodePayload(token: string): Promise<JwtPayload> {
    const decodedToken = await this.jwt.verify(token, 'access_token_key');
    return decodedToken;
  }
}

export default JwtTokenManager;
