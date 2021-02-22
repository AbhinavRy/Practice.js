import React from 'react';
import PrimarySearchAppBar from './buyer_components/PrimaryHeader';
import CarouselBanner from './buyer_components/CarouselBanner';
import ChatbotIcon from './buyer_components/ChatbotIcon';
import PaperComponent from './buyer_components/PaperComponent';
import items from './buyer_components/bannerdata';
import productsdata from './productsdata';
import categories from './buyer_components/categories';
import stores from './Seller_Components/stores';

export default function BuyerHome(){
    return (
        <div>
            <PrimarySearchAppBar />
            <CarouselBanner items={items}/>
            <h4>Recently Viewed:</h4>
            <PaperComponent items={productsdata} />
            <h4>Categories:</h4>
            <PaperComponent items={categories} />
            <h4>Stores Near You:</h4>
            <CarouselBanner items={stores}/>
            <ChatbotIcon />
        </div>
    );
}