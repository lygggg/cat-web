import express from 'express';

import ProductRepo from '../repositories/product.repository';
import ProductService from '../services/product.service';

const router = express.Router();

router.post('/', async (req, res) => {
  const { category, offset, limit } = req.body;
  const productRepo = new ProductRepo();
  const productService = new ProductService(productRepo);
  const products = await productService.getProducts({ category, offset, limit });
  res.send({ products });
});

router.post('/new', async (req, res) => {
  const productRepo = new ProductRepo();
  const productService = new ProductService(productRepo);
  await productService.createProduct(req.body);
  res.send('상품추가');
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const productRepo = new ProductRepo();
  const productService = new ProductService(productRepo);
  const product = await productService.getProduct(id);
  res.send({ product });
});

// router.get('/categories', (req, res) => {
//   const category = categories();
//   res.send({ category });
// });

export default router;
