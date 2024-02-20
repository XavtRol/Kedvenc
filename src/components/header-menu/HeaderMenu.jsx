import {Link, NavLink} from "react-router-dom"
import './header-menu.css'




const HeaderMenu = () => {
    return <div className='header-menu'>
        <NavLink to="products" className={({isActive}) => isActive ? 'active' : ''}>Товары</NavLink>
        <NavLink to="sales" className={({isActive}) => isActive ? 'active' : ''} >Акции</NavLink>
        <a href="#telefon" >Контакты</a>   
    </div>
}


export default HeaderMenu