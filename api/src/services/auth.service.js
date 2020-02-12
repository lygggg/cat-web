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
    return {
      name: userInfo[0].name,
      phoneNumber: userInfo[0].phoneNumber,
      location: userInfo[0].location,
      email: userInfo[0].email,
    };
  }

  async signUp(user) {
    await this.auth.createOne(user);
    await this.auth.createCart(user.email);
  }
}
