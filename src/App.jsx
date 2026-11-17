import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './componants/Navbar'
import AllProducts from './pages/AllProducts'
import ProductDetails from './pages/ProductDetails'
import CreateProduct from './pages/CreateProduct'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/products/create' element={<CreateProduct />} />



      </Routes>
    </>
  )
}

export default App
