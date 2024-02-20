import React from "react"

import flowers from '../../assets/imgs/flowers_sales.svg'

import './styles.css'


const SalesItem = () => {
    return <div className="">
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
    </div>
}


export default SalesItem