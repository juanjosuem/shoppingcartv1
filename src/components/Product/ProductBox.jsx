import React from 'react';
import { Link } from 'react-router-dom';

function ProductBox({ name, image, onAddToCart, viewLink }) {
    return <div className="col-md-4 col-sm-6 col-lg-3" style={{marginBottom:10,marginTop:10}}>
        <div className="card">
            <img className="card-img-top" src={image} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <Link to={viewLink} className="card-link">Details</Link>
                <a href="#" className="card-link" onClick={onAddToCart}>Add to Cart</a>
            </div>
        </div>
    </div>;
}

export default ProductBox;