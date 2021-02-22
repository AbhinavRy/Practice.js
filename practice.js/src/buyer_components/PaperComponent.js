import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/styles'

export default function PaperComponent(props){
    return(
        <div>
            {props.items.map( (item, i) => <Item key={i} item={item} /> )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-block', 
      margin: 8,
    },
    flow: {
        
    }
  }));

const imgstyles = {
    width:"20vw",
    height: "10vh"
};

function Item(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Paper elevation={3} className={classes.flow}>
            <img src={props.item.imgURL} style={imgstyles}  alt=""/>
            <div style={{width:90,height:50,overflowY: "hidden"}}>
                <p style={{textOverflow:"ellipsis"}}>{props.item.name}</p>
            </div>
        </Paper>
        </div>
    )
}