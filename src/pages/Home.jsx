import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../assets/home.jpg'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import Footer from './Footer'



const Home = () => {
  return (
    <>
     
    <div className="overflow-hidden theme">
    <Navbar/>
    {/* home-page-img */}
      <div className='h-[84vh] w-[100vw] mx-auto overflow-hidden rounded-2xl  '>
       <img src={HomeImg} alt="" className='object-cover  h-full w-full rounded-2xl' />
      </div>
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
      <Footer/>
    </div>
      
    </>
  )
}

export default Home
