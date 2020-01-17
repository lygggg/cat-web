import express from 'express';
import { putBasket, getBasket, deleteCart, toggleItem } from '../stores/BasketStore';

const router = express.Router();

router.get('/', (req, res) => {
    const baskets = getBasket(req.session.email);
    console.log('get',baskets);
    res.send({ baskets });
})

router.post('/', (req, res) => {
    putBasket(req.body, req.session.email);
    res.send('장바구니 보내기');
})

router.delete('/', (req, res) => {
    const { productId } = req.body;
    deleteCart(productId, req.session.email);
    res.send('장바구니 삭제');
})

router.patch('/', (req, res) => {
    const { productId } = req.body;
    toggleItem(req.session.email, productId);
    res.send('체크');
})

export default router;