import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { base_url } from '../../requests/requests'

import { useDispatch } from 'react-redux';
import { addProductAction } from '../../store/cartReducer'

import "./style.css"



const ProductItem = ({id, image, title, price, discont_price, link}) => {
    const dispatch = useDispatch()
    const percentagePrice = Math.floor(((price-discont_price)/price)*100)

    const someProduct = {
        id,
        image,
        title,
        price,
        discont_price,
    }

    const handleAddToCart = () => {
        dispatch(addProductAction(someProduct))
    }


    return (
        <div className='product_item'>
            <span className="product_item-a">
            <Link to={link ? link + id : id.toString()}>
                <img src={base_url + image} alt="card" className="flowers_product"/>
            </Link>
                <div className="item_body">
                <h3>{discont_price ? discont_price : price}$</h3>
                {discont_price && <p className="item_product-p-grey">{price}$</p>}
                {discont_price && <p className="item_product-p-red">
                    <b> {percentagePrice}% </b>
                </p>}
            </div>
            <div className='poil'>
                <p className="product_item_text">
                    {title}
                </p>
            </div>
            <button className='b_generall' onClick={handleAddToCart} >
                    Add to cart
                </button>
            </span>
        </div>
    );
};

export default ProductItem;