import express from 'express';

import AuthRepo from '../repositories/auth.repository';
import AuthService from '../services/auth.service';


const router = express.Router();

router.post('/', async (req, res) => {
  const authRepo = new AuthRepo();
  const authService = new AuthService(authRepo);
  await authService.signUp(req.body);

  res.send('회원가입 완료');
});

export default router;
