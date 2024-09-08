import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Banner from './components/Banner'
import Header from './components/Header'
import Product from './components/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <Product />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
