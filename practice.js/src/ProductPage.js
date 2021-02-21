import React from 'react';
import SearchAppBar from './buyer_components/SecondaryHeader';
import productsdata from './productsdata';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';

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
            <h4>Description:</h4>
            <p>{productsdata[0].desc}</p>
            <p>Store's Location:</p>
            <p>{productsdata[0].storeLocation}</p>
            <iframe width="410" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=77.2348925471306%2C28.56976956231617%2C77.23740309476854%2C28.57134074309763&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/28.57056/77.23615">View Larger Map</a></small>
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