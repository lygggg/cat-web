import store from './api/stores/ProductStore'

export const getItems = async () => {
    try {
        return await store.products()
    } catch (e) {
    }
}