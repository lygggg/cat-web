import React, { useState } from 'react';
import productStore from '../stores/ProductStore';


function ProductNew() {
    console.log(productStore.products);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('')
const [price, setPrice] = useState(0);
const [category, setCategory] = useState();
const [fileName, setFileName] = useState('이미지 파일 선택');
const [image, setImage] = useState();

// const onCategoryChange =(event) => {
//     setCategory(event.target.value ?)
// }
const onRegister = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    productStore.createProduct({
        title,
        category,
        price,
        description,
        image,
    }
    )
}
    return(
        
        <div className="container container-sm container-item-create">
            <h5 className="container-headline">중고 상품 등록</h5>
            <form className="form-item-create" onSubmit={onRegister}>
                <div className="form-group form-title">
                    <input type="text" className="form-control" id="productsTitle" placeholder="제품 이름을 입력하세요." value={title}
                            onChange={v => setTitle(v.target.value)}/>
                </div>
                <div className="form-group form-category">
                    <select id="productCategory" className="form-control" value={category} >

                    </select>
                </div>
                <button className="btn btn-primary btn-submit">상품 추가하기</button>
            </form>
            </div>
        
        
        
    )
    
}

export default ProductNew;