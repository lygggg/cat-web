import axios from 'axios';

const PRODUCT_QUESTION_URL = 'http://localhost:3000/question';

export const getQuestions = async (params) => {
    const data = await axios.get(PRODUCT_QUESTION_URL + `/${params}`);
    return data;
}