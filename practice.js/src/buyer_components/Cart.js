import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import productsdata from '../productsdata';
import PrimarySearchAppBar from './PrimaryHeader';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 140,
  },
});

export default function Cart() {
  const classes = useStyles();

  return (
    <div>
        <PrimarySearchAppBar />
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={productsdata[0].imgURL[0]}
                title="Item in Cart"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {productsdata[0].name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {productsdata[0].price}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='paymentpage'>
                <Button size="small" color="primary">
                Buy Now
                </Button></Link>
                <Button size="small" color="primary">
                Delete from Cart
                </Button>
            </CardActions>
        </Card>
    </div>
  );
}
