import userModel from '../models/auth.schema';
import cartModel from '../models/basket.schema';
import purchaseModel from '../models/purchase.schema';
import { model } from 'mongoose';

class UserRepository {
    constructor() {

    }
    async getOne(userEmail) {
        const getUser = await userModel.find({ email: userEmail });
        if(getUser) {
            return getUser
        }
    }

    async createOne({ email, password, name, phoneNumber, location }) {
        const newUser = await new userModel({
            email,
            password,
            name,
            phoneNumber,
            location,
        })
        try {
            await newUser.save();
        } catch(e) {
            return console.error(500, e);
        }
        
    // 사용자 장바구니 배열
    // 사용자 구매페이지 배열
    // 사용자 회원 배열추가
}
    async createCart(userEmail) {
        const newCart = await new cartModel({
            email: userEmail,
            products: [],
        })
        try {
            await newCart.save();
        } catch(e) {
            return console.error(500, e);
        }
    }
    
    async createPurchase(userEmail) {
        const newPurchase = await new purchaseModel({
            email: userEmail,
            products: [],
        })
        try {
            await newPurchase.save();
        } catch(e) {
            return console.error(500, e);
        }
    }
}

export default UserRepository;

