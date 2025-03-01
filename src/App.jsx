import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About';
import Protfolio from './Components/Protfolio';
import Contect from './Components/Contect';
import Home from './Components/Home'
import Layout from './Components/Layout'

export default function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: < About /> },
        { path: "protfolio", element: <Protfolio /> },
        { path: "contact", element: <Contect /> },


      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
