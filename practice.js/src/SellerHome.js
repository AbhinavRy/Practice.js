import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PrimaryHeader from './buyer_components/PrimaryHeader'
import SellerOrders from './Seller_Components/SellerOrders'
import SellerShop from './Seller_Components/SellerShop'
import styles from './Seller_Components/SellerHome.module.css'

const useStyles = makeStyles({
    root: {
      width: '100%',
      position: 'fixed',
      overflow: 'hidden',
      bottom: 0,
      height: '4em'
    },
  });

function SellerHome() {
    const [isOrders, setIsOrders] = useState('Orders')
    const classes = useStyles();

    const handleChange = (event,newValue) => {
        setIsOrders(newValue);
      };

    return (
        <div className={styles.Container}>
            <PrimaryHeader isSeller={true} />
            {isOrders==="Orders"?
            <SellerOrders/>:
            <SellerShop/>}
            <BottomNavigation value={isOrders} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Orders" value="Orders" icon={<ShoppingBasketIcon />} />
                <BottomNavigationAction label="My Shop" value="MyShop" icon={<StorefrontIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default SellerHome
