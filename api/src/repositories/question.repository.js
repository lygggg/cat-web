import model from '../models/question.scheama';

class QuestionRepository {
    async getAll(productId) {
        const getQuestions = await model.find({id: productId })
        console.log(productId);
        return getQuestions;
    }
}

export default QuestionRepository;