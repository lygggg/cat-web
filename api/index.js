const express = require('express');
const cors = require('cors');

const {
    products,
    categories,
    getProducts,
    getProduct,
} = require('../api/stores/ProductStore')

 const port = 3000;

 const app = express();

 app.use(express.json());
 app.use(cors());

 app.get('/products', (req, res) => {
     const tasks = products();
     res.send({ tasks });
 });

 app.post('/products', (req, res) => {
     const { category, offset, limit } = req.body;
     const tasks = getProducts({category, offset, limit});
     console.log(tasks);
     res.send({ tasks });
 })
 app.get('/products/:id', (req, res) => {
     const id = req.params.id;
     const tasks = getProduct(id);
     res.send({tasks});
 })

 app.get('/categories', (req, res) => {
     const category = categories();
     res.send({category});
 });
 
 app.listen(3000, () => {
     console.log(`Listening on port ${port}...`);
 });

