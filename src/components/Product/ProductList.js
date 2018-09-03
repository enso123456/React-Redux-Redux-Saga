import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const ProductList = ({ product_name, description, votes, image }) => {
    return (
        <div className="product-panel">
            <div className="col-xs-3 thumbnail">
                <img src={image} className="product-img" />
            </div>
            <div className="col-xs-9">
                <h2 className="product-name">{product_name}</h2>
                <p className="product-descp">{description.substring(0, 100)}</p>
                <button className="btn-vote">
                    <FontAwesomeIcon 
                        className="btn-i-up"
                        icon={faCaretUp}
                    />
                    {votes}
                </button>
            </div>
        </div>
    )
}

export default ProductList;