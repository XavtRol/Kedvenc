import React from 'react'
import closeIcon from '../../assets/icons/close.png'
import { base_url } from '../../requests/requests'

import { useDispatch } from 'react-redux'

import "./style.css"
import { decrProductAction, deleteProductAction, incrProductAction } from '../../store/cartReducer'



const CartItem = ({id, image, title, price, discont_price, count}) => {

    const dispatch = useDispatch()


    const handleIncrementProduct = () => {
        dispatch(incrProductAction(id))
    }


    const handleDecrementProduct = () => {
        dispatch(decrProductAction(id))
    }


    const handleDeleteProduct = () => {
        dispatch(deleteProductAction(id))
    }

    return (
        <div className='cart_item'>
            {/* <div className="cart_item_img">
                <img src={base_url + image} alt="пенек" />
            </div>
            <div className="cart_item_text">
                <p className='cart_item_title'>{title}</p>
                <div>
                    <div className="cart_item_plus-minus">
                        <button disabled={count === 1} onClick={handleDecrementProduct}>-</button>
                        <span>{count}</span>
                        <button onClick={handleIncrementProduct}>+</button>
                    </div>
                </div>
            </div>
            <div className='price_can'>
                <div className="cart_item_price">
                    <span>{discont_price ?? price}$</span>
                </div>
                <div className="cart_item_old-price">
                   {discont_price && <span>{price} $</span>}
                </div>
            </div>
            <div className="cart_item_delete">
                <img src={closeIcon} alt="close icon" onClick={handleDeleteProduct}/>
            </div> */}
        </div>
    );
};

export default CartItem;