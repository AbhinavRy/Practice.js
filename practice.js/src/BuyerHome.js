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
            <ChatbotIcon />
            <p>Recently Viewed:</p>
            <PaperComponent items={productsdata} />
            <p>Categories:</p>
            <PaperComponent items={categories} />
            <p>Stores Near You:</p>
            <CarouselBanner items={stores}/>
        </div>
    );
}