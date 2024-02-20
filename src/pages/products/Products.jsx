import React, { useEffect } from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import Filter from '../../components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../requests/requests';
import A_1 from "../../assets/imgs/A_1.png"
import a_2 from "../../assets/imgs/a_2.png"
import a_3 from "../../assets/imgs/a_3.png"
import a_4 from "../../assets/imgs/a_4.png"
import a_5 from "../../assets/imgs/a_5.png"
import a_6 from "../../assets/imgs/a_6.png"
import a_7 from "../../assets/imgs/a_7.png"
import a_8 from "../../assets/imgs/a_8.png"
import e_1 from "../../assets/imgs/e_1.png"
import e_2 from "../../assets/imgs/e_2.png"
import e_3 from "../../assets/imgs/e_3.png"
import e_4 from "../../assets/imgs/e_4.png"
import e_5 from "../../assets/imgs/e_5.png"
import e_6 from "../../assets/imgs/e_6.png"
import e_7 from "../../assets/imgs/e_7.png"
import e_8 from "../../assets/imgs/e_8.png"
import e_9 from "../../assets/imgs/e_9.png"
import j_1 from "../../assets/imgs/j_1.png"
import j_2 from "../../assets/imgs/j_2.png"
import j_3 from "../../assets/imgs/j_3.png"
import j_4 from "../../assets/imgs/j_4.png"
import j_5 from "../../assets/imgs/j_5.png"
import j_6 from "../../assets/imgs/j_6.png"
import j_7 from "../../assets/imgs/j_7.png"
import j_8 from "../../assets/imgs/j_8.png"
import j_9 from "../../assets/imgs/j_9.png"
import benin_1 from "../../assets/imgs/benin_1.png"
import benin_2 from "../../assets/imgs/benin_2.png"
import gana_1 from "../../assets/imgs/gana_1.png"
import gana_2 from "../../assets/imgs/gana_2.png"
import gana_3 from "../../assets/imgs/gana_3.png"
import gana_4 from "../../assets/imgs/gana_4.png"
import arocco from "../../assets/imgs/arocco.png"
import {Link, NavLink} from "react-router-dom"

import "./styles.css"



const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products.products)

    const category = useSelector(store => store.products.category)

    useEffect(()=>{
        if(products.length === 0)
            dispatch(fetchProducts())
    }, [])
    const product = 1

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
    }

    return (
    <div className='products'>
        <h2>Товары</h2>
        <Filter/>
        <div className='all_goods'>
        <div className="a-1">
                    <Link to="/angola/:f">
                        <div className="img_a">
                            <img src={A_1} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5799 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, Человек с барабаном</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/angola/:f/:s">
                        <div className="img_a">
                            <img src={a_2} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>6499 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, женщина с детьми</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/angola/:f/:s/:th">
                        <div className="img_a">
                            <img src={a_3} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>3999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, женщина с кувшином</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
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
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/angola/:f/:s/:th/:fo/:fi">
                        <div className="img_a">
                            <img src={a_5} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>7999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, статуя, дерево</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/angola/:f/:s/:th/:fo/:fi/:si">
                        <div className="img_a">
                            <img src={a_6} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4500 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, абориген, дерево 20 см</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/angola/:f/:s/:th/:fo/:fi/:si/:se">
                        <div className="img_a">
                            <img src={a_7} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>3500 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, антилопа, дерево , 6см</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/angola/:f/:s/:th/:fo/:fi/:si/:se/:ei">
                        <div className="img_a">
                            <img src={a_8} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>8999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Ангола, носорог,(какое-то редкое дерево)</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a" onClick={addToCart}>
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/benin/:f/:s/:th/:fo">
                        <div className="img_a">
                            <img src={benin_1} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4499₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Человек, Бенин</p>
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
            <div className="a-1">
                    <Link to="/benin/:f/:s/:th/:fo/:fi">
                        <div className="img_a">
                            <img src={benin_2} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Человек, Бенин</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a3">
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div>
            <div className="a-1">
                    <Link to="/benin/:f/:s/:th/:fo/:fi/:si/:se/:ei/:ni">
                        <div className="img_a">
                            <img src={e_9} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>11999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Линейный корабль</p>
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
            <div className="a-1">
                    <Link to="/gana/:f">
                        <div className="img_a">
                            <img src={gana_1} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Старец, дерево</p>
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
            <div className="a-1">
                    <Link to="/gana/:f/:s">
                        <div className="img_a">
                            <img src={gana_2} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>8499 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Люди, дерево</p>
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
            <div className="a-1">
                    <Link to="/gana/:f/:s/:th">
                        <div className="img_a">
                            <img src={gana_3} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>6299 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Человек,13 см, дерево</p>
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
            <div className="a-1">
                    <Link to="/gana/:f/:s/:th/:fo">
                        <div className="img_a">
                            <img src={gana_4} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>аборигены, дерево</p>
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
            <div className="a-1">
                    <Link to="/morocco/:f/:s/:th/:fo/:fi/:si/:se/:ei">
                        <div className="img_a">
                            <img src={arocco} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>8299 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Кувшин, Марокко</p>
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
            <div className="a-1">
                    <Link to="/morocco/:f/:s/:th/:fo/:fi">
                        <div className="img_a">
                            <img src={e_8} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>8999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Рыба, Марокко</p>
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
            <div className="a-1">
                    <Link to="/morocco/:f/:s/:th/:fo/:fi/:si">
                        <div className="img_a">
                            <img src={e_6} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5499 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Цапля, Марокко</p>
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
            <div className="a-1">
                    <Link to="/morocco/:f/:s/:th/:fo/:fi/:si/:se">
                        <div className="img_a">
                            <img src={e_7} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Колесница, Марокко</p>
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
    )
}

export default Products;