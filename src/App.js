import './App.css'
import Header from './components/header'
import Footer from './components/footer/Footer.jsx'
import Home from './components/home/Home'
import Category from './pages/category/Category.jsx'
import {Route, Routes} from "react-router-dom"
import NotFound from './pages/not_found_page/NotFound.jsx'
import Products from './pages/products/Products.jsx'
import Product from './pages/product/Product.jsx'
import Sales from './pages/sales/sales.jsx'
import Cart from './pages/cart/Cart.jsx'
import Angola from './pages/angola/angola.jsx'
import Firstaf from './pages/angola_itens/firstaf.jsx'
import Benin from './pages/benin/benin.jsx'
import Gana from './pages/gana/gana.jsx'
import Secondaf from './pages/angola_itens/secondaf.jsx'
import Thirdaf from './pages/angola_itens/thirdaf.jsx'
import Forthaf from './pages/angola_itens/forthaf.jsx'
import Fifthaf from './pages/angola_itens/fifthaf.jsx'
import Sixthaf from './pages/angola_itens/sixthaf.jsx'
import Seventhaf from './pages/angola_itens/seventhaf.jsx'
import Eightaf from './pages/angola_itens/eightaf.jsx'
import Firsteu from './pages/benin_itens/firsteu.jsx'
import Secondeu from './pages/benin_itens/secondeu.jsx'
import Thirdeu from './pages/benin_itens/thirdeu.jsx'
import Fortheu from './pages/benin_itens/fortheu.jsx'
import Fiftheu from './pages/benin_itens/fiftheu.jsx'
import Sixtheu from './pages/benin_itens/sixtheu.jsx'
import Seventheu from './pages/benin_itens/seventheu.jsx'
import Eighteu from './pages/benin_itens/eighteu.jsx'
import Ninetheu from './pages/benin_itens/ninetheu.jsx'
import Firstjp from './pages/gana_itens/firstjp.jsx'
import Secondjp from './pages/gana_itens/secondjp.jsx'
import Thirdjp from './pages/gana_itens/thirdjp.jsx'
import Forthjp from './pages/gana_itens/forthjp.jsx'
import Fifthjp from './pages/gana_itens/fifthjp.jsx'
import Sixthjp from './pages/gana_itens/sixthjp.jsx'
import Seventhjp from './pages/gana_itens/seventhjp.jsx'
import Eightjp from './pages/gana_itens/eightjp.jsx'
import Ninethjp from './pages/gana_itens/ninethjp.jsx'
import Morocco from './pages/morocco/morocco.jsx'

import './index.css'



function App() {
  return (
    <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='angola' element={<Angola/>}/>
          <Route path='benin' element={<Benin/>}/>
          <Route path='gana' element={<Gana/>}/>
          <Route path='morocco' element={<Morocco/>}/>
          <Route path='angola/:firstaf' element={<Firstaf/>}/>
          <Route path='angola/:firstaf/:secondaf' element={<Secondaf/>}/>
          <Route path='angola/:firstaf/:secondaf/:thirdaf' element={<Thirdaf/>}/>
          <Route path='angola/:firstaf/:secondaf/:thirdaf/:forthaf' element={<Forthaf/>}/>
          <Route path='angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf' element={<Fifthaf/>}/>
          <Route path='angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf/:sixthaf' element={<Sixthaf/>}/>
          <Route path='angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf/:sixthaf/:seventhaf' element={<Seventhaf/>}/>
          <Route path='angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf/:sixthaf/:seventhaf/:eightaf' element={<Eightaf/>}/>
          <Route path='benin/:firsteu' element={<Firsteu/>}/>
          <Route path='benin/:firsteu/:secondeu' element={<Secondeu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu' element={<Thirdeu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu/:fortheu' element={<Fortheu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu' element={<Fiftheu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu' element={<Sixtheu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu/:seventheu' element={<Seventheu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu/:seventheu/:eighteu' element={<Eighteu/>}/>
          <Route path='benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu/:seventheu/:eighteu/:ninetheu' element={<Ninetheu/>}/>
          <Route path='gana/:firstjp' element={<Firstjp/>}/>
          <Route path='gana/:firstjp/:secondjp' element={<Secondjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp' element={<Thirdjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp/:forthjp' element={<Forthjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp' element={<Fifthjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp' element={<Sixthjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp' element={<Seventhjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp/:eightjp' element={<Eightjp/>}/>
          <Route path='gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp/:eightjp/:ninethjp' element={<Ninethjp/>}/>
          <Route path='morocco/:firstjp' element={<Firstjp/>}/>
          <Route path='morocco/:firstjp/:secondjp' element={<Secondjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp' element={<Thirdjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp/:forthjp' element={<Forthjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp' element={<Fifthjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp' element={<Sixthjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp' element={<Seventhjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp/:eightjp' element={<Eightjp/>}/>
          <Route path='morocco/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp/:eightjp/:ninethjp' element={<Ninethjp/>}/>
          <Route path='categories/:angola/:firstaf' element={<Firstaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf' element={<Secondaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf/:thirdaf' element={<Thirdaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf/:thirdaf/:forthaf' element={<Forthaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf' element={<Fifthaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf/:sixthaf' element={<Sixthaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf/:sixthaf/:seventhaf' element={<Seventhaf/>}/>
          <Route path='categories/:angola/:firstaf/:secondaf/:thirdaf/:forthaf/:fifthaf/:sixthaf/:seventhaf/:eightaf' element={<Eightaf/>}/>
          <Route path='categories/:benin/:firsteu' element={<Firsteu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu' element={<Secondeu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu' element={<Thirdeu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu/:fortheu' element={<Fortheu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu' element={<Fiftheu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu' element={<Sixtheu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu/:seventheu' element={<Seventheu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu/:seventheu/:eighteu' element={<Eighteu/>}/>
          <Route path='categories/:benin/:firsteu/:secondeu/:thirdeu/:fortheu/:fiftheu/:sixtheu/:seventheu/:eighteu/:ninetheu' element={<Ninetheu/>}/>
          <Route path='categories/:gana/:firstjp' element={<Firstjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp' element={<Secondjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp' element={<Thirdjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp/:forthjp' element={<Forthjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp' element={<Fifthjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp' element={<Sixthjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp' element={<Seventhjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp/:eightjp' element={<Eightjp/>}/>
          <Route path='categories/:gana/:firstjp/:secondjp/:thirdjp/:forthjp/:fifthjp/:sixthjp/:seventhjp/:eightjp/:ninethjp' element={<Ninethjp/>}/>
          <Route path='products/' element={<Products/>}/>
          <Route path='products/:productId' element={<Product/>}/>
          <Route path='sales' element={<Sales/>}/>
          <Route path='sales/:productId' element={<Product/>} />
          <Route path='cart' element={<Cart/>}/>
          <Route path='categories/*' element={<Category/>}/>
          <Route path='categories/:categoryId' element={<Products/>}/>
          <Route path='categories/:categoryId/:productId' element={<Product/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
