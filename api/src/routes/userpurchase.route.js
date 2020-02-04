import express from 'express';

import PurchaseRepo from '../repositories/purchase.repository';
import PurchaseService from '../services/purchase.service';

const router = express.Router();

router.post('/', async (req, res) => {
  const purchaseRepo = new PurchaseRepo();
  const purchaseService = new PurchaseService(purchaseRepo);
  await purchaseService.createPurchase(req.body, req.session.email);
   res.send('구매리스트에 넣기');
});

router.get('/', async (req, res) => {
  const purchaseRepo = new PurchaseRepo();
  const purchaseService = new PurchaseService(purchaseRepo);
  const purchases = await purchaseService.getPurchase(req.session.email);
  res.send({ purchases });
});

export default router;