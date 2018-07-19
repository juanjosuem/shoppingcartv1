import React, { Component } from 'react';
import CartItem from './Cartitem';
import { observer , inject } from 'mobx-react';


@inject('productsStore')
@observer
class Cart extends Component {

    handleQuantity=(item,e)=>{
        item.quantity=e.target.value;       
    }

    render() {
        const {productsStore}=this.props;
        return (
            <div className="col-lg-8">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>SubTotal</th>
                        </tr>                        
                    </thead>
                    <tfoot>
                        <tr >
                            <td colSpan={3}>Total</td>
                            <td>{productsStore.totalCart}</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {productsStore.itemsInCart.map(
                            item => <CartItem key={item.id} {...item} 
                            onUpdateQuantity={this.handleQuantity.bind(this,item)}
                            subtotal={productsStore.getSubTotal(item)}
                            />                        
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Cart;