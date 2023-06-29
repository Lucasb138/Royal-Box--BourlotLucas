import './App.css'
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemListPage from './pages/ItemListPage'
import AboutPage from './pages/AboutPage'
import ItemDetail from './pages/ItemDetailPage'
import CartPage from './pages/CartPage'

import ItemDetailPage from './pages/ItemDetailPage'
import ShoppingCartContextProvider from './context/ShoppingCartContext'

function App() {


  return (
    <ShoppingCartContextProvider>
      
    <Router>
    
    <Navbar></Navbar>
    
    <Routes>
    <Route path = "/" element={<ItemListPage/>} />
    <Route path = "/category/:category" element={<ItemListPage />} />
    <Route path = "/about" element={<AboutPage />} />
    <Route path = "/item/:id" element={<ItemDetailPage/>} />
    <Route path = "/cart" element={<CartPage/>} />
    </Routes>

    </Router>    
    </ShoppingCartContextProvider>
  )
}

export default App
