
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Catalog from './Catalog';
import ProductDetail from './Product/ProductDetail';
import Cart from './Cart/Cart';
import Api from '../api';

import productStore from '../stores/ProductsStore'


import { observer } from 'mobx-react';

function NotFound() {
    return <h2>Path does not exist..</h2>
}

@observer class AppProducts extends Component {
    state = {
        products: [],
        //itemsInCart: JSON.parse(localStorage.getItem('itemsInCart')) || [],
        itemsInCart: []
    };


    constructor(){
        console.log('CONSTRUCTOR');
        console.log(productsStore);
    }

    componentDidMount() {
        Api.getProducts()
            .then(response => {
                this.setState(prevState => {
                    return { products: response.data }
                });
            })
            .catch(e => console.log('Error:', e));
    }

    addToCart = (product,exist) => {        
        if(!exist){
            product['quantity']=1;
            this.setState(prevState => {
                return { itemsInCart: [...prevState.itemsInCart, product] }
            });
        }else{
            const itemsUpdated=this.state.itemsInCart.map(item=>{
                if(item.id===product.id){
                    item.quantity++;
                }
                return item;
            });
            this.setState({itemsInCart: itemsUpdated});
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/catalog" />} />
                    <Route path="/catalog" exact render={() => {
                        return <Catalog {...this.state} onAddToCart={this.addToCart} />
                    }} prueba={this.state.a} />
                    <Route path="/catalog/:id" render={props => {
                        return <ProductDetail itemsInCart={this.state.itemsInCart} id={props.match.params.id} />
                    }} />
                    <Route path="/cart" render={props => {
                        return <Cart itemsInCart={this.state.itemsInCart} />
                    }}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>);
    }
}

export default AppProducts;