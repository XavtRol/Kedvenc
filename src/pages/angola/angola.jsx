import React, { useEffect } from "react"
import A_1 from "../../assets/imgs/A_1.png"
import a_2 from "../../assets/imgs/a_2.png"
import a_3 from "../../assets/imgs/a_3.png"
import a_4 from "../../assets/imgs/a_4.png"
import a_5 from "../../assets/imgs/a_5.png"
import a_6 from "../../assets/imgs/a_6.png"
import a_7 from "../../assets/imgs/a_7.png"
import a_8 from "../../assets/imgs/a_8.png"
import Filter from "../../components/filter/Filter"
import {Link, NavLink} from "react-router-dom"
import "./africa.css"

const Angola = () => {
    const addToCart = () => {
        const someProduct = {
            image: A_1,
            title: "Ангола, Человек с барабаном",
            price: "2500 ₽",
            count: 0,
        }
    }
    return <div>
        <h2 className="afrh2">
            Ангола
        </h2>
        <Filter/>
        <div className="Africa_goods">
            <div className="a-1">
                    <Link to="f">
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
                    <Link to="f/:s">
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
                    <Link to="f/:s/:th">
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
                    <Link to="f/:s/:th/:fo">
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
                    <Link to="f/:s/:th/:fo/:fi">
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
                    <Link to="f/:s/:th/:fo/:fi/:si">
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
                    <Link to="f/:s/:th/:fo/:fi/:si/:se">
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
                    <Link to="f/:s/:th/:fo/:fi/:si/:se/:ei">
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
        </div>
    </div>
}
export default Angola