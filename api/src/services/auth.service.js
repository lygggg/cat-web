import { userStore } from "../stores/UserStore";

export default class AuthService {
    constructor(auth) {
        this.auth = auth;
    }

    async login(email, password) {
        const userAuth = await this.auth.getOne(email, password);
        return userAuth;
    }

    async signUp(user) {
        console.log(user.email,'이메일');
        await this.auth.createOne(user);
    }
}