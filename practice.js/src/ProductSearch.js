import React from 'react'
import ProdInfo from './buyer_components/ProductInfo.js'
import productsdata from './productsdata.js'
import SearchAppBar from './buyer_components/SecondaryHeader'

function createProdPage(productdata){
    return <ProdInfo name={productdata.name}/>;
}
export default function Product(){
    return(
        <div>
            <SearchAppBar />
            {productsdata.map(createProdPage)}
        </div>
    );
}