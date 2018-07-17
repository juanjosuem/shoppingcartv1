import React, { Component } from 'react';
import CounterCart from '../CounterCart';
import { Link } from 'react-router-dom';
import Api from '../../api';

class ProductDetail extends Component {
    state = {
        productInfo: {}
    }

    componentDidMount() {
        Api.getProduct(this.props.id).then(r => {
            this.setState(() => {
                return {
                    productInfo: r.data
                }
            })
        })
    }
    render() {

        const { name, detail, price, stock, image } = this.state.productInfo;
        return (

            <div className="col-lg-8">
                <nav className="navbar sticky-top navbar-light bg-light">
                    <a className="navbar-brand" href="#">Products</a>
                    <CounterCart itemsInCart={this.props.itemsInCart} />
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