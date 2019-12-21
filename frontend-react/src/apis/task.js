import axios from 'axios';

const CATEGORIES_URL = 'http://localhost:3000/categories';
const TASKS_URL = 'http://localhost:3000/products';

export const getProducts = async () => {
    const { data } = await axios.get(TASKS_URL);
    return data;
}

export const getCategories = async () => {
    const { data } = await axios.get(CATEGORIES_URL);
    return data;
}

export const getSliceProducts = async ({ category, offset, limit }) => {
    const { data } = await axios.post(TASKS_URL,{ category, offset, limit })
    return data;
} 
export const getProduct = async () => {
    const { data } = await axios.get(TASKS_URL + `/${id}`);
    return data;

}