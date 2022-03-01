import React from 'react'
import {Slider,ProductListing,Footer} from "./index"
import Header from "./Navbar"
export const  Home = () => {
  return (
    <>
      <Header/>  
      <Slider/>
      <ProductListing/>
      <Footer/>
    </>
  )
}
