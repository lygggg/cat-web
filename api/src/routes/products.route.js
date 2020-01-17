import express from 'express';
import { products, categories, getProducts, getProductDetail, createProduct } from '../stores/ProductStore';

const router = express.Router();

router.get('/', (req, res) => {
    const product = products();
    res.send({ product });
});

router.post('/', (req, res) => {
    const { category, offset, limit } = req.body;
    const products = getProducts({ category, offset, limit });
    console.log('열기');
    res.send({ products });
})

router.post('/new', (req, res) => {
    console.log('상품추가');
    createProduct(req.body);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const products = getProductDetail(id);
    res.send({ products });
})

router.get('/categories', (req, res) => {
    const category = categories();
    res.send({ category });
});

export default router;