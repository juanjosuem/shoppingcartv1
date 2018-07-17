import React from 'react';
import { Link } from 'react-router-dom';

export default function CounterCart({ itemsInCart }) {
    return <span className="navbar-text">
        <Link to="/cart">Items in Cart  (<span className="badge badge-dark"> {itemsInCart.length}</span>)</Link>
    </span>;
}