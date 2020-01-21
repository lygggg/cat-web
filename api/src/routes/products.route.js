import express from 'express';
import {
  products, categories, getProducts, getProductDetail, createProduct,
} from '../stores/ProductStore';

const router = express.Router();

router.get('/', (req, res) => {
  const product = products();
  res.send({ product });
});

router.post('/', (req, res) => {
  const { category, offset, limit } = req.body;
  const products = getProducts({ category, offset, limit });
  res.send({ products });
});

router.post('/new', (req, res) => {
  createProduct(req.body);
  res.send('상품추가');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const product = getProductDetail(id);
  res.send({ product });
});

router.get('/categories', (req, res) => {
  const category = categories();
  res.send({ category });
});

export default router;
