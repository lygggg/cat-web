import axios from 'axios';

const PRODUCT_QUESTION_URL = 'http://ec2-15-164-220-31.ap-northeast-2.compute.amazonaws.com:3000/question';

export const getQuestions = async (params) => {
    const data = await axios.get(PRODUCT_QUESTION_URL + `/${params}`, { withCredentials: true });
    return data;
}

export const createQuestions = async (params) => {
    const data = await axios.post(PRODUCT_QUESTION_URL, params, { withCredentials: true });
    return data;
}