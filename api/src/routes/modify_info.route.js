import express from 'express';

import AuthRepo from '../repositories/auth.repository';
import AuthService from '../services/auth.service';

const router = express.Router();

router.patch('/', async (req, res) => {
    const { password, name, phoneNumber } = req.body;
    const authRepo = new AuthRepo();
    const authService = new AuthService(authRepo);
    const userEmail = req.session.email
    await authService.modifyInfo(password, name, phoneNumber, userEmail);
    res.send('회원정보 수정');
})

export default router;