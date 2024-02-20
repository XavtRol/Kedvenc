import React, { useEffect } from 'react';
import Main from '../main/Main';
import HomeCategory from '../homeCategory';
import HomeForm from '../home-form/HomeForm';
import ProductItem from '../productItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../requests/requests';
import a_4 from "../../assets/imgs/a_4.png"
import e_2 from "../../assets/imgs/e_2.png"
import {Link, NavLink} from "react-router-dom"
import "./style.css"



const Home = () => {
    const {products} = useSelector(store => store.products)

    const dispatch = useDispatch()

    useEffect(() => {
        if(products.length === 0){
            dispatch(fetchProducts())
        }
    }, [])


    const randomSalesProducts = products
        .filter(product => product.discont_price)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
    

    console.log(randomSalesProducts)

    return (
        <div>
            <Main/>
            <HomeCategory/>
            <HomeForm/>
            
            <div className='sales'>
                <h2>Скидки</h2>
            </div>
            <div className='general_sales_first'>
                <div className="a-1">
                        <Link to="angola/:f/:s/:th/:fo">
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
        </div>
    );
};

export default Home;