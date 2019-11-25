const DEFAULT_IMAGE ='/public/image/cat'
const productStore ={
    _product: [
        { id: 100, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 101, title: '뉴웨이브 홀리스틱 연어 (전연령) 2.4kg', category: '사료', price: 19000, description: "천연 항산화 물질인 폴리페놀이 풍부~", imageurl: "/public/image/food_newwave.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 102, title: '로우즈 캣 Meal Free 드라이 푸드 1.5kg (치킨)', category: '사료', price: 52000, description: "생식을 할수 없을때 선택할 수 있는 최고의 선택", imageurl: "/public/image/food_rowz.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 103, title: '[150g 추가증정] 빈티지 그레인프리 오븐프레쉬 캣 300g (칠면조와 청어)', category: '사료', price: 10600, description: "렌더링하지 않은 최상급 신선한 생육, 생선 100%", imageurl: "/public/image/food_vintage.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 200, title: '캣퓨어 6프리 퓨레스틱 50g (연어와 닭가슴살)', category: '간식', price: 2800, description: "국내산 100% 사람먹는 원료", imageurl: "/public/image/stick.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 201, title: '캣퓨어 6프리 퓨레스틱 50g (연어와 참치)', category: '간식', price: 2800, description: "국내산 100% 사람먹는 원료", imageurl: "/public/image/stick_fish.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 202, title: '캣퓨어 6프리 퓨레스틱 50g (맛선택가능) -4개', category: '간식', price: 10950, description:"국내산 100% 사람먹는 원료", imageurl: "/public/image/stick_all.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 300, title: '헨더슨 두부모래 천연탈취제 700g', category: '모래', price: 3950, description: "두부모래 사용시, 냄새제거+응고력향상", imageurl: "/public/image/send.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 301, title: '헨더슨 두부모래 천연탈취제 700g -3개', category: '모래', price: 11000, description: "두부모래 사용시, 냄새제거+응고력향상", imageurl: "/public/image/send_hendersonall.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 302, title: '[1+1증정] 헨더슨 두부모래 깨끗한 아침 2.6kg (가는 입자 / 오리지날향)', category:'모래', price:10000, description: "습기와 더위에 강한 최강 두부모래!!", imageurl: "/public/image/send_hendersonsmall.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 400, title: '하림 더리얼 슬림 닭가슴살 고양이 캔 90g', category: '캔', price: 1700, description: "100% 국내산 하림 닭고기로 만들어진 영양간식", imageurl: "/public/image/canner.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 401, title: '캐나다 프레쉬 캣 그레인프리 주식캔 85g (치킨)', category: '캔', price: 2900, description: "100% 캐나다산 닭고기로 만들어진 영양간식", imageurl: "/public/image/canada_ck_canner.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"},
        { id: 402, title: '캐나다 프레쉬 캣 그레인프리 주식캔 85g (연어)', category: '캔', price: 2900, description: "100% 캐나다산 연어로 만들어진 영양간식", imageurl: "/public/image/canada_fish_canner.jpg", account: "1111-111-111-1111",phoneNumber:"010-1321-4123"}


    ],
    _categories: [
        '사료',
        '간식',
        '캔',
        '모래',
    ],

    get products() {
        
        return this._product;
    },

    getProduct(id) {
        return this.products.find(product => product.id == id);
    },

    get categories(){
        return this._categories;
    },
    createProduct({ title, category, price, description, imageurl, phoneNumber, account }) {
        this._product = [...this.products,{
            id: this._product.length +1,
            title,
            category,
            price,
            description,
            imageurl,
            phoneNumber,
            account,
            

        }];
    }
    
   
};
export default productStore;