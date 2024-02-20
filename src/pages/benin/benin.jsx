import React, { useEffect } from "react"
import e_1 from "../../assets/imgs/e_1.png"
import e_2 from "../../assets/imgs/e_2.png"
import e_3 from "../../assets/imgs/e_3.png"
import e_4 from "../../assets/imgs/e_4.png"
import e_5 from "../../assets/imgs/e_5.png"
import e_6 from "../../assets/imgs/e_6.png"
import e_7 from "../../assets/imgs/e_7.png"
import e_8 from "../../assets/imgs/e_8.png"
import e_9 from "../../assets/imgs/e_9.png"
import benin_1 from "../../assets/imgs/benin_1.png"
import benin_2 from "../../assets/imgs/benin_2.png"
import Filter from "../../components/filter/Filter"
import {Link, NavLink} from "react-router-dom"
import "./africa.css"

const Benin = () => {
    return <div>
        <h2 className="afrh2">
            Бенин
        </h2>
        <Filter/>
        <div className="Africa_goods">
            {/* <div className="a-1">
                    <Link to="f">
                        <div className="img_a">
                            <img src={e_1} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>3999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Португалия, солдат , 25см</p>
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
                    <Link to="f/:s">
                        <div className="img_a">
                            <img src={e_2} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5525₽</p>
                                    <p className="item_sale-p-grey">6499₽</p>
                                    <p className="item_sale-p-red">15%</p>
                                </div>
                                <div className='nane'>
                                    <p>Швейцария, Колокольчик, бронза</p>
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
                    <Link to="f/:s/:th">
                        <div className="img_a">
                            <img src={e_3} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4299 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Германия, Велосипедист, 15см</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a">
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div> */}
            <div className="a-1">
                    <Link to="f/:s/:th/:fo">
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
                    <Link to="f/:s/:th/:fo/:fi">
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
            {/* <div className="a-1">
                    <Link to="f/:s/:th/:fo/:fi/:si">
                        <div className="img_a">
                            <img src={e_6} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4499 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Германия, Аист, 20см</p>
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
                    <Link to="f/:s/:th/:fo/:fi/:si/:se">
                        <div className="img_a">
                            <img src={e_7} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Испания, Колесница</p>
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
                    <Link to="f/:s/:th/:fo/:fi/:si/:se/:ei">
                        <div className="img_a">
                            <img src={e_8} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>7999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Германия, Рыба</p>
                                </div>
                                <div>
                        </div>
                        </div>
                            <button className="b_a">
                                В корзину
                            </button>
                        </div>
                    </Link>
            </div> */}
            <div className="a-1">
                    <Link to="f/:s/:th/:fo/:fi/:si/:se/:ei/:ni">
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
        </div>
    </div>
}
export default Benin