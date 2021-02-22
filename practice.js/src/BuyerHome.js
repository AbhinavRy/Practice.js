import React from 'react';
import PrimarySearchAppBar from './buyer_components/PrimaryHeader';
import ProductBanner from './buyer_components/ProductBanner';
import Fab from '@material-ui/core/Fab';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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

export default function BuyerHome(){
    return (
        <div>
            <PrimarySearchAppBar />
            <ProductBanner />
            <ThemeProvider theme={theme}>
            <Link to='/chatbot'>
            <Fab color="primary" variant="extended" aria-label="chatbot" style={{position:"absolute",right:0,bottom:30}}>
                <ChatBubbleOutlineIcon />ChatBot
            </Fab>
            </Link>
            </ThemeProvider>
        </div>
    );
}