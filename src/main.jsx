import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PokemonDetails from './routes/PokemonDetails.jsx'

const router= createBrowserRouter ([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/pokemondetails',
    element: <PokemonDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
