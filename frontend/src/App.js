import logo from './logo.svg'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory category='mens' />} />
            <Route
              path='/womens'
              element={<ShopCategory category='womens' />}
            />
            <Route path='/kids' element={<ShopCategory category='kids' />} />
            <Route path='/product' element={<Product />} />
            <Route path='/productID' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
