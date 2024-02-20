import React, { useEffect } from "react"
import CategoryItem from "../../components/categoryItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../requests/requests"
import {Link, NavLink} from "react-router-dom"
import benin from "../../assets/imgs/benin.jpg"
import gana from "../../assets/imgs/gana.jpeg"
import angola from "../../assets/imgs/angola.jpeg"
import morocco from "../../assets/imgs/morocco.jpg"

import "./Category.css"



const Category = () => {
    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchCategories())
    }, [])

    

    return <div className="categories">
        <h2>
            Категории
        </h2>
        <div className='General_Africa'>
            <Link to="/angola" className='Africa_Iten'>
                <div className="Africa">
                    <img src={angola}/>
                    <h2 className='h2_af'>Ангола</h2>
                </div>
            </Link>
            <Link to="/benin" className='Africa_Iten'>
                <div className="Africa">
                    <img src={benin}/>
                    <h2 className='h2_af'>Бенин</h2>
                </div>
            </Link>
            <Link to="/gana" className='Africa_Iten'>
                <div className="Africa">
                    <img src={gana}/>
                    <h2 className='h2_af'>Гана</h2>
                </div>
            </Link>
            <Link to="/morocco" className='Africa_Iten'>
                <div className="Africa">
                    <img src={morocco}/>
                    <h2 className='h2_af'>Марокко</h2>
                </div>
            </Link>
        </div>
    </div>
}
export default Category