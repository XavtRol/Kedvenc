import React from 'react';
import "./style.css"

const Filter = ({sale = true}) => {
    return (
        <div className='filter'>
            <div className="group1">
                <h3>Цена</h3>
                <input type="text" className='group1Input' placeholder='от'/>
                <input type="text" className='group1Input' placeholder='до'/>

            </div>
            {sale && <div className="group2">
                <h3>Товары со скидками</h3>
                <input type="checkbox" className='group2Input'/>
            </div>}
            <div className="group3">
                <h3>Сортировать</h3>
                <select className='select'>
                    <option value="default" defaultChecked >по умолчанию</option>
                    <option value="asc">по восходящим (price)</option>
                    <option value="desc">по убывающим (price)</option>
                    <option value="title">Название (А-Я)</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;