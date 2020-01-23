import { userStore } from '../stores/UserStore';

class UserRepository {
    constructor() {

    }
    async getOne(email, password) {
      return userStore._users.filter((e) => {
            if (e.email === email && e.password === password) {
                return e;
              }
        });
    }

    async createOne(user) {
        userStore._users = [...userStore._users, user];
            return userStore._users;
    }
    // 사용자 장바구니 배열
    // 사용자 구매페이지 배열
    // 사용자 회원 배열추가
}

export default UserRepository;

