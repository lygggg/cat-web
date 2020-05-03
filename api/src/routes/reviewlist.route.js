import express from 'express';

import ReviewRepo from '../repositories/review.repository';
import ReviewService from '../services/review.service';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const reviewRepo = new ReviewRepo();
    const reviewService = new ReviewService(reviewRepo);
    const reviewProduct = await reviewService.getReviewList(id, req.session.email);
    res.send({reviewProduct});
})

export default router;