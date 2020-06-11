export default class AuthService {
  constructor(auth) {
    this.auth = auth;
  }

  async login(email, password) {
    const userAuth = await this.auth.getOne(email, password);
    return userAuth;
  }

  async Info(email) {
    const userInfo = await this.auth.getOne(email);
    if(!userInfo) {
      return {
        login: false,
      }
    }
    return {
      name: userInfo[0].name,
      phoneNumber: userInfo[0].phoneNumber,
      location: userInfo[0].location,
      email: userInfo[0].email,
    };
  }

  async signUp(user) {
   const userId = await this.auth.createOne(user);
    await this.auth.createCart(user.email);
    return userId;
  }

  async modifyInfo(password, name, phoneNumber, userEmail) {
    if (password) {
      await this.auth.modifyPassword(password, userEmail);
    }

    if (name) {
      await this.auth.modifyName(name, userEmail);
    }
    
    if (phoneNumber) {
      await this.auth.modifyPhoneNumber(phoneNumber, userEmail);

    }
  }
}
