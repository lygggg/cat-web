import React, { useState } from 'react';

import ProductList, { CATEGORIES } from './ProductList';
import { createProduct } from '../taskService';

import styled from 'styled-components';

const GridDiv = styled.div`
    display: grid;
    justify-content: center;
    height: 700px;
    width: 1500px;
    
    
`;

const SubDiv = styled.div`
    grid-gap: 20px;
    margin-bottom: 20px;
`;

// const Input = styled.input`
//   padding: 0 19px;
//   border: 1px solid #ccc;
//   background-color: #fff;
//   margin: 3px;
//   font-size: 14px;
// `; 

const Input = styled.input`
    width: 400px;
    height: 20px;
`;

const Label = styled.span`
    display: inline-block;
    width: 120px;
    margin-top:30px;
    font-size: 13px;
    font-weight: bold;
`;

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
        <GridDiv>
            <SubDiv style={{ textAlign: 'center' }}
                className="container container-sm container-item-create">
                <h5 className="container-headline">중고 상품 등록</h5>

                <form className="form-item-create" onSubmit={onRegister}>
                    <SubDiv className="form-group form-title">
                        <Label>
                            제품 이름*
                        </Label>
                        <Input type="text" className="form-control"
                            id="productsTitle" placeholder="제품 이름을 입력해주세요." value={title}
                            onChange={v => setTitle(v.target.value)} />
                    </SubDiv>
                    <SubDiv className="form-group form-category">
                        <Label>
                            라벨*
                        </Label>
                        <select style={{ width: '410px', height: '30px' }}
                            id="productsCategory" className="form-control" value={category}
                            onChange={onCategoryChange}>
                            <option value={undefined}>카테고리를 선택해주세요.</option>
                            <option value={"사료"}>{CATEGORIES[0]}</option>
                            <option value={"간식"}>{CATEGORIES[1]}</option>
                            <option value={"캔"}>{CATEGORIES[2]}</option>
                            <option value={"모래"}>{CATEGORIES[3]}</option>

                        </select>
                    </SubDiv>
                    <SubDiv className="form-group form-price">
                        <Label>
                            가격*
                        </Label>
                        <Input type="number" className="form-control" id="productsPrice"
                            min="0" step="1000" value={price}
                            onChange={v => setPrice(Number(v.target.value))}
                            placeholder="가격을 입력해주세요. (￦)" />
                    </SubDiv>
                    <SubDiv className="form-group form-description">
                        <textarea style={{ width: '500px', marginLeft: '210px' }}
                            className="form-control" id="productsDescription" rows={10}
                            value={description}
                            onChange={v => setDescription(v.target.value)}
                            placeholder="제품 설명을 작성해주세요." />
                    </SubDiv>
                    <SubDiv className="form-group form-picture">
                        <Label>
                            사진 추가*
                        </Label>
                        <input style={{ marginLeft: '20px' }} className="upload-name"
                            value={fileName} disabled />
                        <label htmlFor="ex_filename" className="btn btn-secondary"></label>
                        <input type="file" id="ex_filename" className="upload-hidden"
                            onChange={onFileChange} />

                    </SubDiv>
                    <SubDiv className="form-group">
                        <Label>
                            전화번호*
                        </Label>
                        <Input type="tel" className="usertel" id="productphoneNumber"
                            value={phoneNumber} onChange={v => setPhone(v.target.value)}
                            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="전화번호를 입력해주세요." required
                        />
                    </SubDiv>
                    <SubDiv className="form-group form-number">
                        <Label>
                            계좌번호*
                        </Label>
                        <Input type="text" className="form-number" id="productacount"
                            value={account} onChange={v => setAccount(v.target.value)}
                            placeholder="계좌번호를 입력해주세요" />
                    </SubDiv>
                    <button className="btn btn-primary btn-submit">상품 등록하기</button>
                </form>
            </SubDiv>
        </GridDiv>



    )

}

export default ProductNew;