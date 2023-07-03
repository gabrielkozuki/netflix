import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)