


const productStore = {
    
    _categories: [
        '사료',
        '간식',
        '캔',
        '모래',
        '장난감',
        '목욕/미용',
        '화장실'
    ],
    

    get products() {

        return this._product;
    },
    putProducts(products) {
        this._product = products;
    },

    getProduct(id) {
        return this.products.find(product => product.id == id);
    },

    get categories() {
        return this._categories;
    },
    
    createProduct({ title, category, price, description, imageurl, phoneNumber, account }) {
        this._product = [...this.products, {
            id: this._product.length + 1,
            title,
            category,
            price,
            description,
            imageurl,
            phoneNumber,
            account,



        }];
    },
    
   


};
export default productStore;
