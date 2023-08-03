import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/Navbar.jsx'
import CartProvider from './CartContext'

import Store from './pages/Store.jsx'
import Cancel from './pages/Cancel.jsx'
import Purchase from './pages/Purchase.jsx'
/* import './App.css' */

function App() {
  return (
    <>
      <CartProvider>
        <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store/>}/>
            <Route path='purchase' element={<Purchase/>}/>
            <Route path='cancel' element={<Cancel/>}/>
          </Routes>
        </BrowserRouter>
        <div className="App">

        </div>
        </Container>
      </CartProvider>
    </>
  )
}

export default App
