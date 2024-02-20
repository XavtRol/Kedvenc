import React from 'react'
import gnom from "../../assets/imgs/gnom.png"
import "./HomeForm.css"

const HomeForm = () => {
    return (
        <div className='HomeForm'>
            <div className="gnom">
                <img src={gnom} alt="gnom" />
            </div>
            <div className="HomeForm-Item">
                <div className='HomeForm-text'>
                    <h2> Скидка 5% </h2>
                    <h4 id='qwerty'>на первый заказ</h4>
                </div>
                <form action="">
                    <input type="text" placeholder='напише телефон сюда'/>
                    <input type="submit" value="Получить скидку" />
                </form>
            </div>
        </div>
    )
}

export default HomeForm

