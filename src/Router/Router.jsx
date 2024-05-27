import React from 'react'
import Home from '../Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Basket from '../Pages/Basket/Basket'
import Wishlist from '../Pages/Wishlist/Wishlist'
import DashBoard from '../Pages/Dashboard/DashBoard'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/Basket" element ={<Basket/>} />
            <Route path="/Wishlist" element ={<Wishlist/>} />
            <Route path="/DashBoard" element ={<DashBoard/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router