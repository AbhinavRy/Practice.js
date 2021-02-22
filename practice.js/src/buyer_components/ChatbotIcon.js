import React from 'react';
import Fab from '@material-ui/core/Fab';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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

export default function ChatbotIcon(){
    return(
        <div>
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