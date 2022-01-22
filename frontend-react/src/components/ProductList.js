import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import store from "../stores/ProductStore";
import Product from "./Product";
import Pagination from "./Pagination";

import { getSliceProducts } from "../service/productService";

import { Button } from "../lib/Button";
import ItemListDiv, { Div, H1, MainDiv } from "../lib/Grid";

const MAX_ITEM = 9;

function ProductList() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(store.categories[categoryId]);
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  const categoryName = store.categories[categoryId];
  const lowprice = (items) => {
    setProductList([...items.sort((a, b) => a.price - b.price)]);
  };

  const highprice = (items) => {
    setProductList([...items.sort((a, b) => b.price - a.price)]);
  };

  const onPageChange = async (page) => {
    const tasks = await getSliceProducts({
      category: categoryName,
      offset: MAX_ITEM * (page - 1),
      limit: MAX_ITEM,
    });
    setProductList(tasks.products.products);
  };

  const fetchTasks = async () => {
    const tasks = await getSliceProducts({
      category: categoryName,
      offset: 0,
      limit: MAX_ITEM,
    });
    setTotal(tasks.products.total);
    setProductList(tasks.products.products);
  };

  useEffect(() => {
    fetchTasks();
  }, [category]);

  useEffect(() => {
    if (category !== categoryId) {
      setCategory(categoryId);
    }
  });

  return (
    <MainDiv>
      <Div>
        <H1>{categoryName}</H1>
        <div>
          <Button onClick={() => lowprice(productList)}>가격 낮은순</Button>
          <Button onClick={() => highprice(productList)}>가격 높은순</Button>
        </div>

        <ItemListDiv>
          {productList.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </ItemListDiv>
        <Pagination total={total} pageSize={9} onPageChange={onPageChange} />
      </Div>
    </MainDiv>
  );
}

export default ProductList;

export const CATEGORIES = {
  0: "사료",
  1: "간식",
  2: "캔",
  3: "모래",
};
