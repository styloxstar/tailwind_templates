import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import Features from '../Components/Features'
import About from '../Components/ABout'
import Product from '../Components/Product'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Blog from '../Components/Blog'
import Dashboard from '../Components/Dashboard'

import colorUI from "../Common/coolorUi.json"


const MainBody = ({color}) => {
  return (
    <>
    <section>
        <div id="header" className=''>
            <Header
            color={color}
            />
        </div>
        <div id="main" className="w-full max-w-screen-2xl px-4 py-1 mx-auto my-2 lg:p-2 md:p-2">
            <Routes>
              <Route path="/dashboard" element={<Dashboard color={color}/>}/>
              <Route path="/about" element={<About color={color}/>}/>
              <Route path="/contact" element={<Contact color={color}/>}/>
              <Route path="/features" element={<Features color={color}/>}/>
              <Route path="/products" element={<Product color={color}/>}/>
            </Routes>
        </div>

        <div id="footer" className={``}>
           <Footer color={color}/>
        </div>
    </section>
    </>
  )
}

export default MainBody