import React from 'react'

const NewProduct = () => {
  return (
    <div>
        <h3 className='text-center m-3'><strong>New Product</strong></h3>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <input type='text' className='m-1 w-50' placeholder='Product-Name'/>
            <input type='text' className='m-1 w-50 ' placeholder='Category'/>
            <input type='text' className='m-1 w-50 ' placeholder='Price'/>
            <input type='text' className='m-1 w-50 ' placeholder='Title...'/>
            <textarea rows={5} cols={60} placeholder="Description..."/>      
            <input type='file' className='m-1 w-50 ' placeholder='images'/>
            <input type='file' className='m-1 w-50 ' placeholder='images'/>
            <input type='file' className='m-1 w-50 ' placeholder='images'/>
            <input type='file' className='m-1 w-50 ' placeholder='images'/>
            <input type='file' className='m-1 w-50 ' placeholder='images'/>
            <br/>
            <button className='btn btn-dark m-5'>add new item </button>


            

        </div>
    </div>
  )
}

export default NewProduct