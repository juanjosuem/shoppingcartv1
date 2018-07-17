import React, { Component } from 'react';
import CartItem from './Cartitem';

class Cart extends Component {

    state={
        items:this.props.itemsInCart
    }

    handleQuantity=(item,e)=>{
        item.quantity=e.target.value;
        this.forceUpdate();
    }

    getSubTotal(item){
        return item.price * item.quantity;
    }
    
    getTotal(){
        let total=0;
        this.state.items.forEach(item=>{
            total+=this.getSubTotal(item);
        });
        return total;
    }


    render() {
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
                            <td>{this.getTotal()}</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {this.state.items.map(
                            item => <CartItem key={item.id} {...item} 
                            onUpdateQuantity={this.handleQuantity.bind(this,item)}
                            subtotal={this.getSubTotal(item)}
                            />                        
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Cart;