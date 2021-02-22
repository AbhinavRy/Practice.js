import React from 'react';
import SearchAppBar from './buyer_components/SecondaryHeader';
import productsdata from './productsdata';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {makeStyles} from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5eaaa8',
      light: '#7fe4e1'
    },
    secondary: {
      main: '#7fe4e1',
    },
  },
});
const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
    },
}))


export default function ProductPage(props){
    let classes = useStyles()

    return(
        <div className={classes.root}>
            <SearchAppBar />
            <p>{productsdata[0].name}</p>
            <Carousel autoPlay={false}>
                {
                    productsdata[0].imgURL.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <h2>{productsdata[0].price}</h2>
            <h3>Store:{productsdata[0].store}</h3>
            <ThemeProvider theme={theme}>
            <Link to="/cart">
            <Fab color="primary" variant="extended" aria-label="buynow">
                Buy Now
            </Fab>
            </Link>
            <Fab color="primary" variant="extended" aria-label="addtocart">
                Add to Cart
            </Fab>
            </ThemeProvider>
            <h4>Description:</h4>
            <p>{productsdata[0].desc}</p>
            <p>Store's Location:</p>
            <p>{productsdata[0].storeLocation}</p>
            <Fab color="primary" variant="extended" aria-label="add" href="https://www.openstreetmap.org/#map=19/28.57056/77.23615">
                Visit Store
            </Fab>
            <iframe width="400" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=77.2348925471306%2C28.56976956231617%2C77.23740309476854%2C28.57134074309763&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/28.57056/77.23615">View Larger Map</a></small>
        </div>
    );
}

const imgstyles = {
    width:"100vw",
    height: "50vh"
};

function Item(props){
    return (
        <Paper>
            <img src={props.item} style={imgstyles}  alt=""/>
        </Paper>
    )
}