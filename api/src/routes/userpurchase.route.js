import express from 'express';

import PurchaseRepo from '../repositories/purchase.repository';
import PurchaseService from '../services/purchase.service';

const router = express.Router();

router.post('/', async (req, res) => {
  if (!req.session.email) {
    return res.status(401).send();
  }

  const purchaseRepo = new PurchaseRepo();
  const purchaseService = new PurchaseService(purchaseRepo);

  try {
    await purchaseService.createPurchase(req.body.products, req.session.email);
    res.send('구매리스트에 넣기');
  } catch (err) {
    console.error(err);
    res.status(500).send("Inernal server error");
  }
});

router.get('/', async (req, res) => {
  const purchaseRepo = new PurchaseRepo();
  const purchaseService = new PurchaseService(purchaseRepo);
  const purchases = await purchaseService.getPurchase(req.session.email);
  res.send({ purchases });
});

export default router;