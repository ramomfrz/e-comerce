import { useState, useEffect } from 'react'
import Head from "./components/Header/index.jsx"
import Body from "./components/Body/index.jsx"
import Cards from "./components/Cards/index.jsx"
import Share from "./components/Share/index.jsx"
import Footer from "./components/Footer/index.jsx"
import "./global.css"

function App() {
  const [products, setProducts] = useState([])
  const [number, setNumber] = useState(1)

  async function fetchProduct() {
    const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${number}`)
    const result = await response.json()
    setProducts(result.products)
  }
  useEffect(() => { fetchProduct() }, [number])

  function handleClick() {
    setNumber((n) => n + 1)
  }

  return (
    <>
      <Head />
      <Body />
      <div className='hr container'>
        <hr /> <span className="selectSpan">Sua seleção especial</span> <hr />
      </div>

      <div className='containerMap container'>
        {products.map(((product) => {
          return <Cards products={product} key={product.id} />
        }))}
      </div>
      <div className='buttonDiv'>
        <button onClick={handleClick} className='buttonMoreProducts '> Ainda mais produtos aqui!</button>
      </div>
      <div className='hr hrShare container'>
        <hr /> <span className="selectSpan">Compartilhe a novidade</span> <hr />
      </div>
      <Share />
      <Footer />
    </>
  )
}

export default App
