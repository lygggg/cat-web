import express from 'express';

import AuthRepo from '../repositories/auth.repository';
import AuthService from '../services/auth.service';

import { getUserProfile } from '../stores/UserStore';

const router = express.Router();

router.delete('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.send('Session Destroyed!');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const authRepo = new AuthRepo();
  const authService = new AuthService(authRepo);
  const userProfile = await authService.login(email, password);
  if (email === userProfile[0].email && password === userProfile[0].password) {
    req.session.email = userProfile[0].email;
    req.session.name = userProfile[0].name;
    res.json({ islogin: true, name: req.session.name });
  } else {
    res.json({ islogin: false });
  }
});

export default router;
