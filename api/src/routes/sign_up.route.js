import express from 'express';

import { signUp } from '../stores/UserStore';
import { userSignUpBasket } from '../stores/BasketStore';
import { userSignUpPurchase } from '../stores/PurchaseStore';

const router = express.Router();

router.post('/', (req, res) => {
    signUp(req.body);
    userSignUpBasket(req.body.email);
    userSignUpPurchase(req.body.email);
    res.send('회원가입 완료')
});

export default router;