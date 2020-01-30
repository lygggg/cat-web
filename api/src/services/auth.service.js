export default class AuthService {
    constructor(auth) {
        this.auth = auth;
    }

    async login(email, password) {
        const userAuth = await this.auth.getOne(email, password);
        return userAuth;
    }

    async signUp(user) {
        await this.auth.createOne(user);
        await this.auth.createCart(user.email);
        await this.auth.createPurchase(user.email);
    }
}