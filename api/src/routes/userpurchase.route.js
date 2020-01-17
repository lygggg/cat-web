import express from 'express';
import { getPurchases, createPurchases } from '../stores/PurchaseStore';

const router = express.Router();
router.post('/', (req, res) => {
    createPurchases(req.body, req.session.email);
    res.send('구매리스트에 넣기')
})

router.get('/', (req, res) => {
    const purchases = getPurchases(req.session.email);
    res.send({ purchases });
})

export default router;