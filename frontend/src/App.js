import logo from './logo.svg'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import womens_banner from './Components/assets/banner_women.png'
import kids_banner from './Components/assets/banner_kids.png'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route
              path='/mens'
              element={<ShopCategory banner={men_banner} category='men' />}
            />
            <Route
              path='/womens'
              element={<ShopCategory banner={womens_banner} category='women' />}
            />
            <Route
              path='/kids'
              element={<ShopCategory banner={kids_banner} category='kid' />}
            />
            <Route path='/product' element={<Product />} />
            <Route path='/productID' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
