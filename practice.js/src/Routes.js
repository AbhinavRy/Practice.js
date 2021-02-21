import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import SignIn from './SignIn'
import Signup from './Signup'
import ProductSearch from './ProductSearch'
import BuyerHome from './BuyerHome'
import ProductPage from './ProductPage'
import SellerHome from './SellerHome'
import EditPage from './Seller_Components/EditPage'
import AddProduct from './Seller_Components/AddProduct'
import Cart from './buyer_components/Cart'
import PaymentPage from './buyer_components/PaymentPage'
import SearchBar from './buyer_components/SearchBar'

function Routes() {
    return(
        <Switch>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/seller" component={SellerHome}/>
            <Route exact path="/seller/edit" component={EditPage}/>
            <Route exact path="/seller/add" component={AddProduct}/>
            <Route exact path="/buyerhome" component={BuyerHome}/>
            <Route exact path="/searchbar" component={SearchBar}/>
            <Route exact path="/product" component={ProductSearch}/>
            <Route exact path="/productpage" component={ProductPage}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/paymentpage" component={PaymentPage}/>
            <Route path="*" component={ErrorPage} />
        </Switch>
    )
}

export default Routes
