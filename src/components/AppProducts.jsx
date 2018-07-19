
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { observer, Provider } from 'mobx-react';

import Catalog from './Catalog';
import ProductDetail from './Product/ProductDetail';
import Cart from './Cart/Cart';
import Api from '../api';

import productsStore from '../stores/ProductsStore'


function NotFound() {
    return <h2>Path does not exist..</h2>
}

@observer 
class AppProducts extends Component {

    componentDidMount() {
        Api.getProducts()
            .then(response => {
                productsStore.products=response.data;            
            })
            .catch(e => console.log('Error:', e));
    }
    render() {
        return (
            <Provider productsStore={productsStore} anotherStore={['a','b','c']}>
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/catalog" />} />
                        <Route path="/catalog" exact component={Catalog} />
                        <Route path="/catalog/:id" component={ProductDetail} />
                        <Route path="/cart" component={Cart} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
            );
    }
}

export default AppProducts;