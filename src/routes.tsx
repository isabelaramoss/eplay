import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

/* const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/categorias',
      element: <Categorias />
    }
  ]) */

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorias />} />
    <Route path="/produto/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
