import React, { useState, useEffect } from 'react';
import store from '../stores/PurchaseStore';
import Product from './PurchaseProduct';

function PurchaseList() {
    let final = 0;
    const purchaseList = store.finalBilling;
    if (store._finalBilling.length > 0) {
        final = store.priceTotal();
    }

    // const [purchaseList, setPurchaseList] = useState(store.purchases);
    console.log(purchaseList);

    return (

        <>
            <h1>구매목록</h1>
            <h2>나의 구매목록</h2>
            {purchaseList.map(purchase =>
                <li key={purchase.id}>
                    <Product product={purchase} />
                </li>
            )}
            <div>총 금액: {final}</div>


        </>
    )

};
export default PurchaseList;

