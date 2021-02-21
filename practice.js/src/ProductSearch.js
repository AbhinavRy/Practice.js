import React from 'react'
import ProdInfo from './buyer_components/ProductInfo.js'
import productsdata from './productsdata.js'
import SearchAppBar from './buyer_components/SecondaryHeader'
import {Link} from 'react-router-dom'

function createProdPage(productdata){
    return <Link to='/productpage'><ProdInfo 
        key={productdata.id}
        name={productdata.name}
        imgURL={productdata.imgURL}
        price={productdata.price}
        rating={productdata.rating}
        store={productdata.store}
    /></Link>;
}
export default function ProductSearch(){
    return(
        <div>
            <SearchAppBar />
            {productsdata.map(createProdPage)}
        </div>
    );
}