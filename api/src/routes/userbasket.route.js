import express from 'express';

import BasketRepo from '../repositories/basket.repository';
import BasketService from '../services/basket.service';

const router = express.Router();

router.get('/', async (req, res) => {
  const basketRepo = new BasketRepo();
  const basketService = new BasketService(basketRepo);
  const baskets = await basketService.getBaskets(req.session.email);
  res.send({ baskets });
});

router.post('/', async (req, res) => {
  const basketRepo = new BasketRepo();
  const basketService = new BasketService(basketRepo);
  await basketService.putBasket(req.body, req.session.email);
  res.send('장바구니 보내기');
});

router.delete('/', async (req, res) => {
  const { productId } = req.body;
  const basketRepo = new BasketRepo();
  const basketService = new BasketService(basketRepo);
  await basketService.deleteBasket(productId, req.session.email);
  res.send('장바구니 삭제');
});

router.patch('/', async (req, res) => {
  const { productId, count } = req.body;
  const basketRepo = new BasketRepo();
  const basketService = new BasketService(basketRepo);
  await basketService.modifyCount(productId, req.session.email, count);
  res.send('체크');
});

export default router;
