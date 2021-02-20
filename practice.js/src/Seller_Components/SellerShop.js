import React from 'react'
import ProductList from './ProductList'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    product: {
        fontWeight: 500,
    },
    BtmBtn: {
        marginBottom: '4em'
    }
  }));

function SellerShop() {
    const classes = useStyles();

    const Products = ProductList.map((x)=>{
        return(
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={x.imgUrl}
                    title="Product"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5" className={classes.product}>
                            {x.itemName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Price:- {x.price}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link to='/seller/edit'>
                            <IconButton aria-label="add to favorites">
                                <CreateIcon />
                            </IconButton>
                        </Link>
                        <IconButton aria-label="share">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </div>
            </Card>
        )
    })
    return (
        <div>
            {Products}
            <Link to='/seller/add'><Button className={classes.BtmBtn}>Add Product</Button></Link>
        </div>
    )
}

export default SellerShop
