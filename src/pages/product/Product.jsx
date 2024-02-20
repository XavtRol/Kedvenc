import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { base_url, fetchProduct } from '../../requests/requests'

import './style.css'
import { addProductAction } from '../../store/cartReducer'



const Product = () => { 
    const {productId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(store => store.product)


    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [])

    const onBack = () => {
        navigate(-1)
    }

    const percentagePrice = useMemo(() => {
        return Math.floor(((product.price-product.discont_price)/product.price)*100)
    }, [product])


    const addToCart = () => {
        const someProduct = {
            id: product.id,
            image: product.image,
            title: product.title,
            forTotal: product.discont_price ?? product.price,
            discont_price: product.discont_price,
            price: product.price,
            count: 0,
        }

        dispatch(addProductAction(someProduct))
    }


    if(!product){
        return null
    }
    



    return (
        <div className='product'>
            <div className="top">
                <h2>{product.title}</h2>
                <button onClick={onBack} type="button">
                    Назад
                </button>
            </div>
            <div className="product_general">
                <div className="img_wrapper">
                    <img src={base_url + product.image} alt="product" />
                </div>
                <div className="about_product">
                    <div className='price'>
                        <h2>
                        {product.discont_price ? product.discont_price : product.price}<span className='dollar'>$</span>
                        </h2>
                       {product.discont_price && <span className='old_price'>
                            ${product.price}
                        </span>}
                       {product.discont_price && <span className='sale'>
                            {percentagePrice} <span className='percent'>
                                %
                            </span>
                        </span>}
                    </div>
                    <div className='p-1'>
                        <p><b>Description</b></p>
                        <p className='Paragraf'>{product.description}</p>
                    </div>
                    <div>
                        <button className='b-t' onClick={addToCart}>
                            To cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;