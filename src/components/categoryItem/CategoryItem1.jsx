import React from 'react';
import {Link, NavLink} from "react-router-dom"
import angola from "../../assets/imgs/angola.jpeg"
import benin from "../../assets/imgs/benin.jpg"
import gana from "../../assets/imgs/gana.jpeg"
import morocco from "../../assets/imgs/morocco.jpg"
import "./CategoryItem.css"

const CategoryItem1 = () => {
    return (
        <div className='General_Africa'>
            <Link to="angola" className='Africa_Iten'>
                <div className="Africa">
                    <img src={angola}/>
                    <h2 className='h2_af'>Ангола</h2>
                </div>
            </Link>
            <Link to="benin" className='Africa_Iten'>
                <div className="Africa">
                    <img src={benin}/>
                    <h2 className='h2_af'>Бенин</h2>
                </div>
            </Link>
            <Link to="gana" className='Africa_Iten'>
                <div className="Africa">
                    <img src={gana}/>
                    <h2 className='h2_af'>Гана</h2>
                </div>
            </Link>
            <Link to="morocco" className='Africa_Iten'>
                <div className="Africa">
                    <img src={morocco}/>
                    <h2 className='h2_af'>Марокко</h2>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem1;