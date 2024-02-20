import React, { useEffect } from "react"
import e_2 from "../../assets/imgs/e_2.png"
import to_to from "../../assets/imgs/to_to.png"
import { useNavigate, useParams } from 'react-router-dom'
import "./africa.css"

const Secondeu = () => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }
    return <div className="Nan_1">
        <div className="Nan_part1">
            <div className="part_to_to">
                <h2 className="afrh2">
                Швейцария, Колокольчик, бронза
                </h2>
                <img src={to_to} className="to_to_to"/>
            </div>
            <button onClick={onBack} type="button" className="bb_1">
                Назад
            </button>
        </div>
        <div className="Nan_part2">
            <img src={e_2} className="pic"/>
            <div className="Nan_part3">
                <div className="sale_s">
                    <h3>5525₽</h3>
                    <p className="item_sale-p-grey">6499₽</p>
                    <p className="item_sale-p-red">15%</p>
                </div>
                <p className="description">Описание</p>                
                <p>Колокольчик из бронзы, ввиде женщины. Из Португалии.</p>
                <button className="b_a2">
                    В корзину
                </button>
            </div>
        </div>
    </div>

}
export default Secondeu