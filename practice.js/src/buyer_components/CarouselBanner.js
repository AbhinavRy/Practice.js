import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

export default function CarouselBanner(props){
    return (
        <Carousel>
            {
                props.items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
};

const imgstyles = {
    width:"100vw",
    height: "25vh"
};

function Item(props){
    var storeName="";
        if(props.item.imgURL){
            storeName=props.item.storeName;
        }else{
            storeName="";
        }
    return (
        <Paper variant="oulined" >
            <img style={imgstyles} src={props.item.imgURL} alt="banner"/>
            <div>{storeName}</div>
        </Paper>
    )
}