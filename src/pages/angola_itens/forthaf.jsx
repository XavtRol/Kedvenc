import React, { useEffect } from "react"
import a_4 from "../../assets/imgs/a_4.png"
import to_to from "../../assets/imgs/to_to.png"
import { useNavigate, useParams } from 'react-router-dom'
import "./africa.css"

const Forthaf = () => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }
    return <div className="Nan_1">
        <div className="Nan_part1">
            <div className="part_to_to">
                <h2 className="afrh2">
                Ангола, женщина с кувшином
                </h2>
                <img src={to_to} className="to_to_to"/>
            </div>
            <button onClick={onBack} type="button" className="bb_1">
                Назад
            </button>
        </div>
        <div className="Nan_part2">
            <img src={a_4} className="pic"/>
            <div className="Nan_part3">
                <div className="sale_s">
                    <h3>3999 ₽</h3>
                    <p className="item_sale-p-grey">4999₽</p>
                    <p className="item_sale-p-red">20%</p>
                </div>
                <p className="description">Описание</p>              
                <p>Фигура из дерева, была привезена из Анголы.</p>
                <button className="b_a2">
                    В корзину
                </button>
            </div>
        </div>
    </div>

}
export default Forthaf