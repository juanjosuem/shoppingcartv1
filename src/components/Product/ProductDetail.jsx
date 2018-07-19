import React, { Component } from 'react';
import CounterCart from '../CounterCart';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('productsStore')
class ProductDetail extends Component {
    constructor(props){
        super(props);
        console.log('DETAIL:',props);

        this.productInfo=props.productsStore.products.find(item=>item.id===props.match.params.id);
        this.productsStore=props.productsStore;
        console.log('connsss:',this.productInfo);
    }
    render() {
        console.log('render, productInfo:',this.productInfo);
        const { name, detail, price, stock, image } = this.productInfo;
        return (

            <div className="col-lg-8">
                <nav className="navbar sticky-top navbar-light bg-light">
                    <a className="navbar-brand" href="#">Products</a>
                    <CounterCart itemsInCart={this.productsStore.itemsInCart} />
                </nav>
                <div className="card">
                    <img className="card-img-top" src={image} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{detail}</p>
                        <a className="card-link">Price : {price}</a>
                        <a className="card-link">In Stock : {stock ? "Si" : "No"}</a>
                        <br />

                        <Link to="/catalog" className="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductDetail;