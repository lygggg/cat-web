import model from '../models/auth.schema';

class UserRepository {
    constructor() {

    }
    async getOne(userEmail) {
        const getUser = await model.find({ email: userEmail });
        if(getUser) {
            return getUser
        }
    }

    async createOne({ email, password, name, phoneNumber, location }) {
        const user = await new model({
            email,
            password,
            name,
            phoneNumber,
            location,
            cart: [],
            purchase: [],
        })
        try {
            await user.save();
        } catch(e) {
            return console.error(500, e);
        }
        
    // 사용자 장바구니 배열
    // 사용자 구매페이지 배열
    // 사용자 회원 배열추가
}
}

export default UserRepository;

