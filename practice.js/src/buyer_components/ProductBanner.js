import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

export default function ProductBanner(props){
    var items = [
        {
            name: "Offer #1",
            description: "Recent random offer you may like!",
            imgURL:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg"
        },
        {
            name: "Offer #2",
            description: "Electronics goods",
            imgURL:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/AugART/Teaser/Ingress/freedom_sale_teaser_page_PC_unrec_08._CB441232371_._SL1280_FMjpg_.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
};

const imgstyles = {
    width:"100vw",
    height: "25vh"
};

function Item(props){
    return (
        <Paper variant="oulined" >
            <img style={imgstyles} src={props.item.imgURL} alt="offer banner"/>
        </Paper>
    )
}