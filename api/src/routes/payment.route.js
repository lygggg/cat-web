import express from 'express';

import PaymentRepo from '../repositories/payment.repository';
import PaymentService from '../services/payment.service';

const router = express.Router();

router.post('/', async (req, res) => {
    const paymentRepo = new PaymentRepo();
    const paymentService = new PaymentService(paymentRepo);
    const price = await paymentService.getPrice(req.body);
    res.send({ price });
});

export default router;