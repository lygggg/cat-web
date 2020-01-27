import express from 'express';

import BasketRepo from '../repositories/basket.repository';
import BasketService from '../services/basket.service';

import {
  putBasket, getBasket, deleteCart, toggleItem,
} from '../stores/BasketStore';

const router = express.Router();

router.get('/', async (req, res) => {
  const basketRepo = new BasketRepo();
  const basketService = new BasketService(basketRepo);
  const baskets = await basketService.getBaskets(req.session.email);
  // const baskets = getBasket(req.session.email);
  res.send({ baskets });
});

router.post('/', async (req, res) => {
  // const basketRepo = new BasketRepo();
  // const basketService = new BasketService(basketRepo);
  // await basketService.putBasket(req.body, req.session.email);
  putBasket(req.body, req.session.email);
  res.send('장바구니 보내기');
});

router.delete('/', async (req, res) => {
  const { productId } = req.body;
  // const basketRepo = new BasketRepo();
  // const basketService = new BasketService(basketRepo);
  // await basketService.deleteBasket(productId, req.session.email);
  deleteCart(productId, req.session.email);
  res.send('장바구니 삭제');
});

router.patch('/', (req, res) => {
  const { productId } = req.body;
  // const basketRepo = new BasketRepo();
  // const basketService = new BasketService(basketRepo);
  // await basketService.toggleBasket(req.session.email, productId);
  toggleItem(req.session.email, productId);
  res.send('체크');
});

export default router;
