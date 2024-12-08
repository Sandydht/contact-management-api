import PasswordHash from "../../Applications/security/PasswordHash";

class BcryptPasswordHash extends PasswordHash {
  private bcrypt: any;
  private saltRound: number;

  constructor(bcrypt: any, saltRound: number = 10) {
    super();
    this.bcrypt = bcrypt;
    this.saltRound = saltRound;
  }

  async hash(password: string): Promise<string> {
    return this.bcrypt.hash(password, this.saltRound);
  }
}

export default BcryptPasswordHash;
