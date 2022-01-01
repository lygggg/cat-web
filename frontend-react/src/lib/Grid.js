import styled from "styled-components";
const ItemListDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 300px 300px 300px;
  justify-content: center;
`;
export const H1 = styled.h1`
  width: 100%;
  text-align: left;
  padding: 10px;
  margin-left: 10px;
  font-size: 27px;
  margin-top: 15px;
`;

export const Div = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e0e0e0;
  display: grid;
  justify-content: center;
`;

export const MainDiv = styled.div`
  width: 100%;
`;

export default ItemListDiv;
