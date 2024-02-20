import React from 'react'
import {useNavigate} from 'react-router-dom'
import CartItem from '../../components/cartItem/CartItem'
import arrow from '../../assets/icons/arrow.svg'
import { useDispatch, useSelector } from "react-redux"

import "./style.css"



const Cart = () => {
    const navigate = useNavigate()

    const { products } = useSelector(store => store.cart)

    const dispatch = useDispatch()

    console.log(products);

    const onBack = () => {
        navigate(-1)
    }


    return (
        <div className='cart_general'>
            <div className='cart'>
                <div className='shop123'>
                    <h1>Корзина</h1>
                    <button className='button_cart' onClick={onBack}>
                        Назад к покупкам
                        <img src={arrow} alt="strela" />
                    </button>
                </div>

                <div className='cart_content'>
                    <div className="cart_items">
                        {
                            products.length > 0 && 
                            products.map(product => {
                                return <CartItem key={product.id} {...product}/>
                            })
                        }
                    </div>
                <div className="cart_form">
                </div>
                </div>
            </div>
            <div className='order1'>
                <div className='order_s_1'>
                    <h2>Детали заказа</h2>
                    <div className='order_text'>
                        <p>Всего:</p>
                        <p>$$$</p>
                    </div>
                </div>

                <div className='form_order'>
                    <form action="">
                        <input type="text" placeholder='Номер телефона' className='text_order1'/>
                    </form>
                </div>
                <button className='b_order_2'>Купить</button>
               
            </div>
            
        </div>
    );
};

export default Cart;