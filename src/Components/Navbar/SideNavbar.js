import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideNavbar = () => {
  const navagate=useNavigate()
  return (
    <div className='col-3 h-auto side-nav bg-light'>
<div className='d-flex flex-column w-50 div align-items-center m-5 '>
<button className='w-75 btn btn-info m-3' onClick={()=>{navagate("/")}}>Home</button>
<button className='w-75 btn btn-info m-3' onClick={()=>{navagate("/products")}}>Products</button>
<button className='w-75 btn btn-info m-3' onClick={()=>{navagate("/new/product")}}>NewProduct</button>
<button className='w-75 btn btn-info m-3' onClick={()=>{navagate("/orders")}}>Orders</button>
<button className='w-75 btn btn-info m-3' onClick={()=>{navagate("/user")}}>Users</button>
<button className='w-75 btn btn-info m-3' onClick={()=>{navagate("/address")}}>Address</button>
</div>

    </div>
  )
}

export default SideNavbar