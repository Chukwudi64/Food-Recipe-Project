import React from 'react'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Recipe from './Recipe'
import Cart from './Cart'

function home() {
  return (
    <div>
        <Navbar/>
        <Recipe/>
        <Cart/>
        <Footer/>
    </div>
  )
}


export default home