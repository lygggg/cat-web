import axios from 'axios';

const PRODUCT_QUESTION_URL = 'http://localhost:8080/question';

export const getQuestions = async (params) => {
    const data = await axios.get(PRODUCT_QUESTION_URL + `/${params}`);
    return data;
}

export const createQuestions = async (params) => {
    const data = await axios.post(PRODUCT_QUESTION_URL, params);
    return data;
}