import { getQuestions as apiGetQuestion } from '../apis/question';

export const getQuestion = async (params) => {
    try {
        return await apiGetQuestion(params);
    } catch (e) {
        alert(e);
    }
};