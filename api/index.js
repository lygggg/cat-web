const express = require('express');
const cors = require('cors');
const session = require('express-session');
// const Filestore = require('session-file-store')(session);

const {
    products,
    categories,
    getProducts,
    getProductDetail,
    createProduct,
} = require('../api/stores/ProductStore')

const {
    getUserProfile,
    signUp,
} = require('../api/stores/UserStore')

const{
    putBasket,
    getBasket,
    deleteCart,
    toggleItem,
} = require('../api/stores/BasketStore')

const port = 3000;
const app = express();
const corsOptions = {
    origin: '*',
    credentials: true
};
app.use(express.json());

app.use(cors(corsOptions));

app.use(session({
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

app.get('/products', (req, res) => {
    const product = products();
    res.send({ product });
});


app.post('/products', (req, res) => {
    const { category, offset, limit } = req.body;
    const products = getProducts({ category, offset, limit });
    res.send({ products });
})

app.post('/products/new', (req, res) => {
    createProduct(req.body);
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const products = getProductDetail(id);
    res.send({ products });
})

app.get('/categories', (req, res) => {
    const category = categories();
    res.send({ category });
});

app.get('/login', (req, res) => {
    if (req.session.name) {
        const session = req.session
        res.json({ name: session.name });
    }
})

app.delete('/login', (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.send('Session Destroyed!');
    console.log('로그아웃');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const userProfile = getUserProfile(email, password);
    if (email == userProfile[0].email && password == userProfile[0].password) {
        req.session.name = userProfile[0].name;
        req.session.email = userProfile[0].email;
        req.session.save();
        res.json({ islogin: true });
    }
    else {
        res.json({ islogin: false });
    }
})

app.post('/sign_up', (req, res) => {
    signUp(req.body);
})

app.post('/userbasket', (req, res) => {
    const  { productId, price, title, imageurl, productCount }  = req.body;
    putBasket({ productId, price, title, imageurl, productCount }, req.session.email);
    res.send('장바구니 보내기');
})

app.get('/userbasket', (req, res) => {
    const baskets = getBasket(req.session.email);
    res.send({ baskets });
})

app.delete('/userbasket', (req, res) => {
    const { productId } = req.body;
    deleteCart(productId, req.session.email);
    res.send('장바구니 삭제');
})

app.patch('/userbasket', (req, res) => {
    const { productId } = req.body;
    console.log(productId);
    toggleItem(req.session.email, productId);
    res.send('체크');
})


app.listen(3000, () => {
    console.log(`Listening on port ${port}...`);
});

