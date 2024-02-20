import React from "react";
import flowers from "../../assets/imgs/flowers.png"
import {Link} from "react-router-dom"
import "./main.css"

const Main = () => {
    return <div className='banner'>
        <div className="banner-left-block">
            <div className='banner-title'>
                <h2>Распродажа</h2>
                <h3>В честь нового сезона</h3>
        
            </div>
            <div className='banner-btns'>
                <Link to={"sales"} className="banner-sale-btn"> Все акции</Link>
                <Link to={"sales"} className="banner-all"> Подробнее</Link>
                
            </div>
        </div>
        <div className='banner-bg'>
            <img src={flowers} alt="flowers" className="flowers"/>
        </div>
    </div>
}
export default Main