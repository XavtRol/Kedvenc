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
import e_6 from "../../assets/imgs/e_6.png"
import e_7 from "../../assets/imgs/e_7.png"
import e_8 from "../../assets/imgs/e_8.png"
import arocco from "../../assets/imgs/arocco.png"
import Filter from "../../components/filter/Filter"
import {Link, NavLink} from "react-router-dom"
import "./africa.css"

const Morocco = () => {
    return <div>
        <h2 className="afrh2">
            Марокко
        </h2>
        <Filter/>
        <div className="Africa_goods">
            {/* <div className="a-1">
                    <Link to="f">
                        <div className="img_a">
                            <img src={j_1} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Старец, смола</p>
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
                            <img src={j_2} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5499 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Человек, смола</p>
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
                            <img src={j_3} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>4299 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Чистка, 11 см</p>
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
                            <img src={j_4} onclick="this.src={a_2}"/>
                        </div>
                        <div className="about_product">
                            <div className="a_g1">
                                <div className="price">
                                    <p>5999 ₽</p>
                                </div>
                                <div className='nane'>
                                    <p>Старец, дерево, 20 см</p>
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
            </div> */}
            {/* <div className="a-1">
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
            </div> */}
            {/* <div className="a-1">
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
            </div> */}
            <div className="a-1">
                    <Link to="f/:s/:th/:fo/:fi/:si/:se/:ei">
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
                    <Link to="f/:s/:th/:fo/:fi">
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
                    <Link to="f/:s/:th/:fo/:fi/:si">
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
            {/* <div className="a-1">
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
export default Morocco