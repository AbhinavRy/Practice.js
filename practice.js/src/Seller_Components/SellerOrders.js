import React from 'react'
import {Active, Completed, Cancelled} from './OrdersList'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    Btm: {
        height: '4em'
    }
  }));

function SellerOrders() {
    const classes = useStyles();
    const ActiveOrders = Active.map((x)=>{
        return (
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
                        <Typography variant="subtitle1">
                            Address:- {x.Address}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Deliver by:- {x.deliverBy}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    })
    const CompletedOrders = Completed.map((x)=>{
        return (
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
                        <Typography variant="subtitle1">
                            Address:- {x.Address}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Deliver by:- {x.deliverBy}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    })
    const CancelledOrders = Cancelled.map((x)=>{
        return (
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
                        <Typography variant="subtitle1">
                            Address:- {x.Address}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Deliver by:- {x.deliverBy}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    })
    return (
        <div>
            <h1>Active</h1>
            {ActiveOrders}
            <h1>Completed</h1>
            {CompletedOrders}
            <h1>Cancelled</h1>
            {CancelledOrders}
            <div className={classes.Btm}></div>
        </div>
    )
}

export default SellerOrders
