
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartItem({ name, quantity, price, subtotal, onUpdateQuantity }) {
    return (
        <tr>
            <td>{name}</td>
            <td>
                <input type="number" value={quantity} onChange={onUpdateQuantity} /></td>
            <td>{price}</td>
            <td>{subtotal}</td>
        </tr>
    );
}

export default CartItem;