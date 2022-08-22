import { useState, useEffect } from 'react'
import Head from "./components/Header/"
import Body from "./components/Body/"
import Cards from "./components/Cards/"
import Share from "./components/Share"
import Footer from "./components/Footer"
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
