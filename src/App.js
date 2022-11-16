import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import SideNavbar from './Components/Navbar/SideNavbar'
import Address from './Components/Routes/Address/Address'
import Products from './Components/Routes/AllProduct/Products'
import NewProduct from './Components/Routes/CreateNewProduct/NewProduct'
import Home from './Components/Routes/Home/Home'
import Orders from './Components/Routes/Orders/Orders'
import User from './Components/Routes/Users/User'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='d-flex'>
      <SideNavbar/>
      <main className='col-9 '>
   <Routes>
    <Route exect path='/' element={<Home/>}/>
    <Route exect path='/new/product' element={<NewProduct/>}/>
    <Route exect path='/products' element={<Products/>}/>
    <Route exect path='/orders' element={<Orders/>}/>
    <Route exect path='/user' element={<User/>}/>
    <Route exect path='/address' element={<Address/>}/>
   </Routes>
      </main>
      
      </div>
   
<Footer/>

    </div>
  )
}

export default App