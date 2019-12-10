import React, { useState, useEffect } from 'react';
import store from '../stores/PurchaseStore';
import Product from './PurchaseProduct';

function PurchaseList() {
    let final = 0;
    const purchaseList = store.finalBilling;
    if (store._finalBilling.length > 0) {
        final = store.priceTotal();
    }

    console.log(purchaseList);

    return (

        <>
            <h1>구매목록</h1>
            <h2>나의 구매목록</h2>
            <fieldset>
            {purchaseList.map(purchase =>
                <li key={purchase.id}>
                    {purchase.date}
                    <Product product={purchase} />
                </li>
            )}
            </fieldset>

        </>
    )

};
export default PurchaseList;

