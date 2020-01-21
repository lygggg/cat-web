import express from 'express';

import { getUserProfile } from '../stores/UserStore';

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.name) {
    res.json({ name: req.session.name });
  }
});

router.delete('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.send('Session Destroyed!');
});

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const userProfile = getUserProfile(email, password);
  if (email === userProfile[0].email && password === userProfile[0].password) {
    req.session.email = userProfile[0].email;
    req.session.name = userProfile[0].name;
    res.json({ islogin: true, name: req.session.name });
  } else {
    res.json({ islogin: false });
  }
});

export default router;
