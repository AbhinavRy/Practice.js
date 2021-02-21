import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import SignIn from './SignIn'
import Signup from './Signup'
import ProductSearch from './ProductSearch'
import BuyerHome from './BuyerHome'
import ProductPage from './ProductPage'
import EditPage from './Seller_Components/EditPage'
import AddProduct from './Seller_Components/AddProduct'


function Routes() {
    return(
        <Switch>
            <Route exact path="/product" component={ProductSearch}/>
            <Route exact path="/buyerhome" component={BuyerHome}/>
            <Route exact path="/productpage" component={ProductPage}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/seller/edit" component={EditPage}/>
            <Route exact path="/seller/add" component={AddProduct}/>
            <Route path="*" component={ErrorPage} />
        </Switch>
    )
}

export default Routes
