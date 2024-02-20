import React, { useEffect } from "react"
import e_7 from "../../assets/imgs/e_7.png"
import to_to from "../../assets/imgs/to_to.png"
import { useNavigate, useParams } from 'react-router-dom'
import "./africa.css"

const Seventheu = () => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }
    return <div className="Nan_1">
        <div className="Nan_part1">
            <div className="part_to_to">
                <h2 className="afrh2">
                Испания, Колесница
                </h2>
                <img src={to_to} className="to_to_to"/>
            </div>
            <button onClick={onBack} type="button" className="bb_1">
                Назад
            </button>
        </div>
        <div className="Nan_part2">
            <img src={e_7} className="pic"/>
            <div className="Nan_part3">
                <h3>5999 ₽</h3>
                <p className="description">Описание</p>                
                <p>Фигурка колесницы из латуни. Испания.</p>
                <button className="b_a2">
                    В корзину
                </button>
            </div>
        </div>
    </div>

}
export default Seventheu