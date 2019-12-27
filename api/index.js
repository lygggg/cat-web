const express = require('express');
const cors = require('cors');
const session = require('express-session');
const Filestore = require('session-file-store')(session);

const {
    products,
    categories,
    getProducts,
    getProductDetail,
    createProduct,
} = require('../api/stores/ProductStore')

const {
    getUserProfile,
} = require('../api/stores/UserStore')

 const port = 3000;

 const app = express();

 const corsOptions = {
    origin: '*',
    credentials: true
};
 app.use(express.json());

 app.use(cors(corsOptions));


app.use(session({
    secret : 'Rs89I67YEA55cLMgi0t6oyr8568e6KtD',
    resave: false,
    saveUninitialized: true,
    store: new Filestore({
    }
    ),
    cookie: {
        name: 'user',
        maxAge: 600 * 1000,

    }
}));

app.get('/session-destroy', function (req, res) {
    req.session.destroy();
    res.send('Session Destroyed!');
})

 app.get('/products', (req, res) => {
     const product = products();
     res.send({ product });
 });
 

 app.post('/products', (req, res) => {
     const { category, offset, limit } = req.body;
     const products = getProducts({category, offset, limit});
     
     res.send({ products });
 })

 app.post('/products/new', (req, res) => {
     console.log(req.body);
    createProduct(req.body);
  
     
 })

 app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const products = getProductDetail(id);
    res.send({ products });
 })

 app.get('/categories', (req, res) => {
     const category = categories();
     res.send({category});
 });



app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('email',email);
    console.log('passwd',password);
    const userProfile = getUserProfile(email, password);
    console.log(userProfile[0]);
    console.log(email, password);
    if (email == userProfile[0].email && password == userProfile[0].password) {
        console.log('로그인')
        console.log('성공');
        req.session.name = userProfile[0].name;
        req.session.is_logind = true;
        req.session.save();
        res.json({ islogin: true });
    }
else {
        
    }
})

 app.listen(3000, () => {
     console.log(`Listening on port ${port}...`);
 });

