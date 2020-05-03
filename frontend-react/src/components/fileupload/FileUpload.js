import React, { Fragment, useState } from "react";
import styled from "styled-components";

const FileUpload = ({ getReview }) => {
  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  

  const onImageChange = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const onChange = async (e) => {
    onImageChange(e);
    e.preventDefault();
    getReview(e.target.files[0]);
  };

  return (
    <Fragment>
      <form style={{width: '100%'}}>
        <div className="custom-file mb-4">
          <ButtonLabel htmlFor="customFile">사진 첨부하기</ButtonLabel>
          사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부 가능합니다.
          <FileInput
            type="file"
            name='myfile'
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile"></label>
        </div>  
      </form>
      {imageUrl ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <img style={{ height: "60%", width: '200px' }} src={imageUrl} alt="" />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const ButtonLabel = styled.label`
  width: 130px;
  height: 34px;
  line-height: 34px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #6c6c6c;
  color: #6c6c6c;
  background: #fff;
  display: inline-block;
  padding: 0 5px;
  text-align: center;
  margin-left: 1;
  margin: 5px;
`;

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export default FileUpload;
