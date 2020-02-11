import express from 'express';

import ProductRepo from '../repositories/product.repository';
import ProductService from '../services/product.service';

const router = express.Router();

router.get('/', async (req, res) => {
    const productRepo = new ProductRepo();
    const productService = new ProductService(productRepo);
    res.send(await productService.getSearchProducts(req.query.q));
  })

  export default router;