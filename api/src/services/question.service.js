export default class QuestionService {
    constructor(question) {
        this.question = question;
    }

    async getQuestion(id){
        const questions = await this.question.getAll(id);
        return questions;
    }

    async createQuestion(email, id, content) {
        await this.question.putOne(email, id, content);
    }
}