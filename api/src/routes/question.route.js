import express from 'express';

import QuestionRepo from '../repositories/question.repository';
import QuestionService from '../services/question.service';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id,'시발');
    const questionRepo = new QuestionRepo();
    const questionService = new QuestionService(questionRepo);
    const questions = await questionService.getQuestion(id);
    console.log(questions);
    res.send({ questions });
})

export default router;