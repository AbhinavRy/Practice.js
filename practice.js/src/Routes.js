import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import SignIn from './SignIn'
import Signup from './Signup'
import ProductSearch from './ProductSearch'
import BuyerHome from './BuyerHome'
import ProductPage from './ProductPage'


function Routes() {
    return(
        <Switch>
            <Route exact path="/product" component={ProductSearch}/>
            <Route exact path="/buyerhome" component={BuyerHome}/>
            <Route exact path="/productpage" component={ProductPage}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={Signup}>
            </Route>
            <Route path="*" component={ErrorPage} />
        </Switch>
    )
}

export default Routes
