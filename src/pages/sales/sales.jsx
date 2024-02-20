import React, { useEffect } from 'react'
import Filter from '../../components/filter/Filter'

import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../requests/requests'
import a_4 from "../../assets/imgs/a_4.png"
import e_2 from "../../assets/imgs/e_2.png"
import {Link, NavLink} from "react-router-dom"
import ProductItem from '../../components/productItem/ProductItem'
import "./style.css"



const Sales = () => {
    const dispatch = useDispatch()

    const {products} = useSelector(store => store.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    

    const productsWithSale = products.filter(product => product.discont_price)



    return (
        <div className='prd'>
            <h1>Продукты со скидками</h1>
            <Filter sale={false}/>
            <div className='general_sales_first'>
                <div className="a-1">
                        <Link to="/angola/:f/:s/:th/:fo">
                            <div className="img_a">
                                <img src={a_4} onclick="this.src={a_2}"/>
                            </div>
                            <div className="about_product">
                                <div className="a_g1">
                                    <div className="price">
                                        <p>3999₽</p>
                                        <p className="item_sale-p-grey">4999₽</p>
                                        <p className="item_sale-p-red">20%</p>
                                    </div>
                                    <div className='nane'>
                                        <p>Ангола, женщина с кувшином</p>
                                    </div>
                                    <div>
                            </div>
                            </div>
                                <button className="b_a">
                                    В корзину
                                </button>
                            </div>
                        </Link>
                </div>
            
            </div>
{/* 
            <div className='content'>
{
    productsWithSale.length > 0 &&

    productsWithSale.map(product => {
        return <ProductItem {...product} key={product.id} />
    })
}
            </div> */}
        </div>
    );
};

export default Sales;