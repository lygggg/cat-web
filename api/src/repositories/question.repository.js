import model from '../models/question.scheama';

class QuestionRepository {
    async getAll(productId) {
        const getQuestions = await model.find({id: productId })
        return getQuestions;
    }

    async putOne(email, id, content) {
        const d = new Date();
    const date =
      d.getFullYear() + "년 " + d.getMonth() + "월 " + d.getDate() + "일";
        await model.create({ id, email, content, date});
    }
}

export default QuestionRepository;