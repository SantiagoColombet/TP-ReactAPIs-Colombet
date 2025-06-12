import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const [product, setProduct] = useState(null)

useEffect(() => {
  axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(response => {
      setProduct(response.data) 
    })
    .catch(error => {
      console.error('Error:', error)
    })
}, [])

  
  return (
    <>
    {product && (
  <div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <img src={product.image} alt={product.title} width="100" />
  </div>
)}

    </>
  )
}

export default App
