import logo from '../../assets/icons/logo_KD.png'
import HeaderMenu from '../header-menu/HeaderMenu'
import cart from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'

import './header.css'



const Header = () => {
    return <header className='header'>
            <div className='header-logo'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <Link to={'categories'}><button className="catolog">Каталог</button></Link>
            </div>

            <div className='header-right-block'>
                <HeaderMenu />
                <div className='cart'>
                <Link to={'cart'}><img src={cart} alt="cart" /></Link>
                </div>
            </div>
    </header>
}

export default Header



