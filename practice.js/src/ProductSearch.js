import React from 'react'
import ProdInfo from './buyer_components/ProductInfo.js'
import productsdata from './productsdata.js'
import SearchAppBar from './buyer_components/SecondaryHeader'

function createProdPage(productdata){
    return <ProdInfo 
        key={productdata.id}
        name={productdata.name}
        imgURL={productdata.imgURL}
        price={productdata.price}
        rating={productdata.rating}
        store={productdata.store}
    />;
}
export default function ProductSearch(){
    return(
        <div>
            <SearchAppBar />
            {productsdata.map(createProdPage)}
        </div>
    );
}