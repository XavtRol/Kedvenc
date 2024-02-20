import React, { useEffect } from "react"
import j_1 from "../../assets/imgs/j_1.png"
import j_2 from "../../assets/imgs/j_2.png"
import j_3 from "../../assets/imgs/j_3.png"
import j_4 from "../../assets/imgs/j_4.png"
import j_5 from "../../assets/imgs/j_5.png"
import j_6 from "../../assets/imgs/j_6.png"
import j_7 from "../../assets/imgs/j_7.png"
import j_8 from "../../assets/imgs/j_8.png"
import j_9 from "../../assets/imgs/j_9.png"
import gana_1 from "../../assets/imgs/gana_1.png"
import gana_2 from "../../assets/imgs/gana_2.png"
import gana_3 from "../../assets/imgs/gana_3.png"
import gana_4 from "../../assets/imgs/gana_4.png"
import Filter from "../../components/filter/Filter"
import {Link, NavLink} from "react-router-dom"
import "./africa.css"

const Gana = () => {
    return <div>
        <h2 className="afrh2">
            Гана
        </h2>
        <Filter/>
        <div className="Africa_goods">
            <div className="a-1">
                    <Link to="f">
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
                    <Link to="f/:s">
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
                    <Link to="f/:s/:th">
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
                    <Link to="f/:s/:th/:fo">
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
            {/* <div className="a-1">
                    <Link to="f/:s/:th/:fo/:fi">
                        <div className="img_a">
                            <img src={j_5} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>3999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Старец, дерево, 11 см</p>
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
                    <Link to="f/:s/:th/:fo/:fi/:si">
                        <div className="img_a">
                            <img src={j_6} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>6499 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Бронза, 7 см</p>
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
                            <img src={j_7} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>3999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>7см</p>
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
                            <img src={j_8} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4299 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>нэцкэ, смола</p>
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
                    <Link to="f/:s/:th/:fo/:fi/:si/:se/:ei/:ni">
                        <div className="img_a">
                            <img src={j_9} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>нэцкэ, смола, дерево</p>
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
        </div>
    </div>
}
export default Gana