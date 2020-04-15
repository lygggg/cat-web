import express from 'express';

import ReviewRepo from '../repositories/review.repository';
import ReviewService from '../services/review.service';

const router = express.Router();

router.get('/:id', async (req, res) => {
    
    console.log(id,'fsdf');
    // const reviewRepo = new ReviewRepo();
    // const reviewService = new ReviewService(reviewRepo);
    // const reviewProduct = await reviewService.getReview(id, req.session.email);
    res.send('리뷰리스트')
})

export default router;