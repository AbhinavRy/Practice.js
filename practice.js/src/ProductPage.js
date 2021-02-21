import React from 'react';
import SearchAppBar from './buyer_components/SecondaryHeader';
import productsdata from './productsdata';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

export default function ProductPage(props){
    return(
        <div>
            <SearchAppBar />
            <p>{productsdata[0].name}</p>
            <Carousel autoPlay={false}>
                {
                    productsdata[0].imgURL.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <h2>{productsdata[0].price}</h2>
            <h3>Store:{productsdata[0].store}</h3>
            <p>Store's Location:</p>
            <h4>Description:</h4>
            <p>{productsdata[0].desc}</p>
        </div>
    );
}

const imgstyles = {
    width:"100vw",
    height: "50vh"
};

function Item(props){
    return (
        <Paper variant="oulined" >
            <img src={props.item} style={imgstyles}  alt=""/>
        </Paper>
    )
}