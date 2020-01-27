import express from 'express';

import AuthRepo from '../repositories/auth.repository';
import AuthService from '../services/auth.service';
import { userSignUpBasket } from '../stores/BasketStore';
import { userSignUpPurchase } from '../stores/PurchaseStore';

const router = express.Router();

router.post('/', async (req, res) => {
  const authRepo = new AuthRepo();
  const authService = new AuthService(authRepo);
  await authService.signUp(req.body);
  userSignUpBasket(req.body.email);
  userSignUpPurchase(req.body.email);
  res.send('회원가입 완료');
});

export default router;
