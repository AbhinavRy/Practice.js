import React from 'react';
import PrimarySearchAppBar from './buyer_components/PrimaryHeader';
import ProductBanner from './buyer_components/ProductBanner';
import ChatbotIcon from './buyer_components/ChatbotIcon';

export default function BuyerHome(){
    return (
        <div>
            <PrimarySearchAppBar />
            <ProductBanner />
            <ChatbotIcon />
        </div>
    );
}