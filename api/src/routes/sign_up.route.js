import express from 'express';

import AuthRepo from '../repositories/auth.repository';
import AuthService from '../services/auth.service';


const router = express.Router();

router.post('/', async (req, res) => {
  try {
  const authRepo = new AuthRepo();
  const authService = new AuthService(authRepo);
  await authService.signUp(req.body);
  res.json({statusText: 'OK'});
  }
  catch (err) {
    res.send('실패');
  }
});

export default router;
