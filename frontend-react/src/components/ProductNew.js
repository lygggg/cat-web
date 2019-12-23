import React, { useState } from 'react';
import ProductList, { CATEGORIES } from './ProductList';
import { createProduct } from '../taskService';

function ProductNew() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState();
    const [fileName, setFileName] = useState('이미지 파일 선택');
    const [imageurl, setImageurl] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [account, setAccount] = useState('');
    const onFileChange = (event) => {
        if (event.target.files != null && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            setImageurl("/public/image/" + event.target.files[0].name);
        }
    };

    const onCategoryChange = (event) => {
        setCategory(event.target.value ? String(event.target.value) : undefined);
    };

    const onRegister = async (event) => {
        event.preventDefault();
        event.stopPropagation();
       

        createProduct({
            title,
            category,
            price,
            description,
            imageurl,
            phoneNumber,
            account,
        });
        console.log('new')
    };

    return (
        <>
            <div className="container container-sm container-item-create">
                <h5 className="container-headline">중고 상품 등록</h5>

                <form className="form-item-create" onSubmit={onRegister}>
                    <div className="form-group form-title">
                        <input type="text" className="form-control" id="productsTitle" placeholder="제품 이름을 입력해주세요." value={title}
                            onChange={v => setTitle(v.target.value)} />
                    </div>
                    <div className="form-group form-category">
                        <select id="productsCategory" className="form-control" value={category} onChange={onCategoryChange}>
                            <option value={undefined}>카테고리를 선택해주세요.</option>
                            <option value={"사료"}>{CATEGORIES[0]}</option>
                            <option value={"간식"}>{CATEGORIES[1]}</option>
                            <option value={"캔"}>{CATEGORIES[2]}</option>
                            <option value={"모래"}>{CATEGORIES[3]}</option>

                        </select>
                    </div>
                    <div className="form-group form-price">
                        <input type="number" className="form-control" id="productsPrice" min="0" step="1000" value={price}
                            onChange={v => setPrice(Number(v.target.value))}
                            placeholder="가격을 입력해주세요. (￦)" />
                    </div>
                    <div className="form-group form-description">
                        <textarea className="form-control" id="productsDescription" rows={10} value={description}
                            onChange={v => setDescription(v.target.value)}
                            placeholder="제품 설명을 작성해주세요." />
                    </div>
                    <div className="form-group form-picture">
                        <div className="file-box">
                            <input className="upload-name" value={fileName} disabled />

                            <label htmlFor="ex_filename" className="btn btn-secondary">업로드</label>
                            <input type="file" id="ex_filename" className="upload-hidden" onChange={onFileChange} />
                        </div>
                    </div>
                    <div className="form-group">

                        <input type="tel" className="usertel" id="productphoneNumber" value={phoneNumber} onChange={v => setPhone(v.target.value)}
                            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="전화번호를 입력해주세요." required
                        />
                    </div>
                    <div className="form-group form-number">
                        <input type="text" className="form-number" id="productacount" value={account}
                            onChange={v => setAccount(v.target.value)} placeholder="계좌번호를 입력해주세요" />
                    </div>
                    <button className="btn btn-primary btn-submit">상품 등록하기</button>
                </form>
            </div>
        </>



    )

}

export default ProductNew;