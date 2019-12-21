const productStore = {
    _product: [
        { id: 100, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 111, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 112, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 113, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 114, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 115, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 116, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 117, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 118, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 119, title: '[AGT캔 증정] 게더 프리 에이커 캣 치킨 1kg', category: '사료', price: 15000, description: "캐나다 금사료!!", imageurl: "/public/image/gethe.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 101, title: '뉴웨이브 홀리스틱 연어 (전연령) 2.4kg', category: '사료', price: 19000, description: "천연 항산화 물질인 폴리페놀이 풍부~", imageurl: "/public/image/food_newwave.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 102, title: '로우즈 캣 Meal Free 드라이 푸드 1.5kg (치킨)', category: '사료', price: 52000, description: "생식을 할수 없을때 선택할 수 있는 최고의 선택", imageurl: "/public/image/food_rowz.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 103, title: '[150g 추가증정] 빈티지 그레인프리 오븐프레쉬 캣 300g (칠면조와 청어)', category: '사료', price: 10600, description: "렌더링하지 않은 최상급 신선한 생육, 생선 100%", imageurl: "/public/image/food_vintage.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 200, title: '캣퓨어 6프리 퓨레스틱 50g (연어와 닭가슴살)', category: '간식', price: 2800, description: "국내산 100% 사람먹는 원료", imageurl: "/public/image/stick.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 201, title: '캣퓨어 6프리 퓨레스틱 50g (연어와 참치)', category: '간식', price: 2800, description: "국내산 100% 사람먹는 원료", imageurl: "/public/image/stick_fish.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 202, title: '캣퓨어 6프리 퓨레스틱 50g (맛선택가능)  4개', category: '간식', price: 10950, description: "국내산 100% 사람먹는 원료", imageurl: "/public/image/stick_all.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 300, title: '헨더슨 두부모래 천연탈취제 700g', category: '모래', price: 3950, description: "두부모래 사용시, 냄새제거+응고력향상", imageurl: "/public/image/send.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 301, title: '헨더슨 두부모래 천연탈취제 700g 3개', category: '모래', price: 11000, description: "두부모래 사용시, 냄새제거+응고력향상", imageurl: "/public/image/send_hendersonall.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 302, title: '[1+1증정] 헨더슨 두부모래 깨끗한 아침 2.6kg (가는 입자 / 오리지날향)', category: '모래', price: 10000, description: "습기와 더위에 강한 최강 두부모래!!", imageurl: "/public/image/send_hendersonsmall.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 400, title: '하림 더리얼 슬림 닭가슴살 고양이 캔 90g', category: '캔', price: 1700, description: "100% 국내산 하림 닭고기로 만들어진 영양간식", imageurl: "/public/image/canner.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 401, title: '캐나다 프레쉬 캣 그레인프리 주식캔 85g (치킨)', category: '캔', price: 2900, description: "100% 캐나다산 닭고기로 만들어진 영양간식", imageurl: "/public/image/canada_ck_canner.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 501, title: '쥬쥬베 깃텅 방울 와이어 낚시대', category: '장난감', price: 3500, description: "와이어끝에 현란한 깃털이 달려있어 고양이들의 흥미를 일으키는 장난감입니다.", imageurl: "/public/image/toy_fishstick.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 502, title: '[딱 10개만 이 가격]RUG 슬리핑 캣 원목 쇼파', category: '장난감', price: 54950, description: "고양이가 편안하게 놀 수 있는 편안한 소파", imageurl: "/public/image/toy_sofa.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 503, title: '[비캐 캣얌 12g x 3개 증정] 하겐 캣잇 플레이 텀블러 비', category: '장난감', price: 16950, description: "고양이가 정신없이 놀 수 있는 상호작용형 장난감", imageurl: "/public/image/toy_tumbler.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 504, title: '루어캣공방 플레이볼 우드 서클 -싱그런캣닢 증정', category: '장난감', price: 10000, description: "루어캣공방 플레이볼 우드 서클 -싱그런캣닢 증정", imageurl: "/public/image/toy_wood.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
        { id: 505, title: '루어캣공방 플레이볼 우드 트랙 -싱그런캣닢 증정', category: '장난감', price: 12900, description: "루어캣공방 플레이볼 우드 트랙 -싱그런캣닢 증정", imageurl: "/public/image/toy_wood1.jpg", account: "1111-111-111-1111", phoneNumber: "010-1321-4123" },
       


    ],
    _categories: [
        '사료',
        '간식',
        '캔',
        '모래',
        '장난감',
        '목욕/미용',
        '화장실'
    ],
};
    const products = () => {

        return productStore._product;
    }

     const getProduct = (id) => {
         return products.find(product => product.id == id);
     },

    const categories = () => {
        return productStore._categories;
    }

    function getProducts({ category, offset, limit }) {
        const products = productStore._product.filter(i => i.category === category);
        console.log(category,offset,limit);
        const total = products.length;

        return {
            products: products.slice(offset, offset + limit),
            total,
        }
    }
    
    // const createProduct = ({ title, category, price, description, imageurl, phoneNumber, account }) => {
    //     productStore._product = [...productStore.products, {
    //         id: productStore._product.length + 1,
    //         title,
    //         category,
    //         price,
    //         description,
    //         imageurl,
    //         phoneNumber,
    //         account,



    //     }];
    // }
    



module.exports = {
    products,
    categories,
    getProducts,
    getProduct,
};
