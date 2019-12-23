const express = require('express');
const cors = require('cors');

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

 app.use(express.json());
 app.use(cors());

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
     console.log(req.body);
     const userProfile = getUserProfile({ email, password });
    //  console.log(userProfile);
     res.send({ userProfile });

 })
 
 app.listen(3000, () => {
     console.log(`Listening on port ${port}...`);
 });

