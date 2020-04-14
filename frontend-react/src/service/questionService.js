import { getQuestions as apiGetQuestion,
        createQuestions as apiCreateQuestion,
} from '../apis/question';

export const getQuestion = async (params) => {
    try {
        return await apiGetQuestion(params);
    } catch (e) {
        alert(e);
    }
};

export const createQuestion = async (params) => {
    try {
        return await apiCreateQuestion(params);
    } catch(e) {
        alert(e);
    }
}