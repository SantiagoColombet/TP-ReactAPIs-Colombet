import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ListaProductos from './ListaProductos'

function App() {
  const [listaProductos, setListaProductos] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setListaProductos(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className='container'>
      <h1>Productos</h1>
      <ListaProductos listaProductos={listaProductos} />
    </div>
  )
}

export default App
