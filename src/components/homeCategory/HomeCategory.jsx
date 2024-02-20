import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import CategoryItem1 from "../categoryItem/CategoryItem1";


import "./HomeCategory.css"


const HomeCategory = () => {
    return <div className="home-cat">
        <div className="cat-title">
            <h2>Категории</h2>
            <Link to="categories">Все категории</Link>
        </div>
        <CategoryItem1/>
    </div>
}
export default HomeCategory