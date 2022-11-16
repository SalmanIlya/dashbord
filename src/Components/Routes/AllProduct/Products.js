import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BiEdit} from "react-icons/bi"
import {RiDeleteBinLine} from "react-icons/ri"
import "./Style.css"
const Products = () => {
    const [NewProduct,SetNewProduct]=useState([])
    const [a,b]=useState(0)
    const [c,d]=useState(5)
useEffect(()=>{
    const fetchdata=async()=>{
        await axios.get("https://fakestoreapi.com/products").then((response)=>{
            SetNewProduct(response.data)
            return response.data
        }).catch((err)=>{
console.log(err);
        })
    }
    fetchdata()
},[])
console.log(NewProduct)
  return (
    <div className='m-5'>
<h3 className='text-center m-3'><strong>Products</strong></h3>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Category </th>
      <th scope="col">Ratings</th>
      <th scope="col">Reviews</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Eidit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
NewProduct.slice(a,c).map((item)=>{
    return (
        <tbody>
        <tr>
          <th scope="row">{item.id}</th>
          <td><img src={item.image} className="img" /></td>
          <td>{item.price}</td>
          <td>{item.category}</td>
          <td>{item.rating.rate}</td>
          <td>{item.rating.count}</td>
          <td>{(item.title.slice(0,10))+"..."}</td>
          <td>{(item.description.slice(0,10))+"..."}</td>

          <td className='edit'>
          <BiEdit/>
          </td>
          <td className='edit'><RiDeleteBinLine/></td>
        </tr>
      </tbody>
    )
})
  }

</table>
<div className='d-flex justify-content-between'>
<button className='btn btn-info' onClick={()=>{
    if(a===0){
        b(0)
    }else{
        b(a-5)
        d(c-5)
    }
}}>pervious</button>
<button className='btn btn-info' 
onClick={()=>{
    b(a+5)
    d(c+5)
}}
>Next</button>

</div>
    </div>
  )
}

export default Products