import express from 'express';
import { getUserProfile } from '../stores/UserStore';
import session from 'express-session';

const router = express.Router();
router.use(session({
    secret: 'Rs89I67YEA55cLMgi0t6oyr8568e6KtD',
    resave: false,
    saveUninitialized: true,
    // store: new Filestore({
    // }
    // ),
    cookie: {
        name: 'user',
        // maxAge: 600 * 1000,
        httpOnly: false,
    }
}));

router.get('/', (req, res) => {
    if (req.session.name) {
        res.json({ name: req.session.name });
    }
})

router.delete('/', (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.send('Session Destroyed!');
    console.log('로그아웃');
});

router.post('/', (req, res) => {
    console.log('로그인');
    const { email, password } = req.body;
    const userProfile = getUserProfile(email, password);
    if (email == userProfile[0].email && password == userProfile[0].password) {
        req.session.email = userProfile[0].email;
        req.session.name = userProfile[0].name;
        res.json({ islogin: true, name: req.session.name });
    }
    else {
        res.json({ islogin: false});
    }
});

export default router;