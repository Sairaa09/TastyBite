import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import Footer from './Footer'
import ImageSlider from '../components/ImageSlider'



const Home = () => {
  return (
    <>
     
    <div className="overflow-hidden theme">
    <Navbar/>
    
      <ImageSlider/>
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
      <Footer/>
    </div>
      
    </>
  )
}

export default Home
