import React from 'react'
import ProdInfo from './components/ProductInfo.js'
import productsdata from './productsdata.js'

function createProdPage(productdata){
    return <ProdInfo name={productdata.name}/>;
}
export default function Product(){
    return(
        <div>
            {productsdata.map(createProdPage)}
        </div>
    );
}