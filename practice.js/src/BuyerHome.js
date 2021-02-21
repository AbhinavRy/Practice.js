import React from 'react';
import PrimarySearchAppBar from './buyer_components/PrimaryHeader';
import ProductBanner from './buyer_components/ProductBanner';

export default function BuyerHome(){
    return (
        <div>
            <PrimarySearchAppBar />
            <ProductBanner />
        </div>
    );
}