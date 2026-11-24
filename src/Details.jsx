import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const params = useParams(); //to capture the data sent through url 
    // console.log(params);
    const productId = params.pid ;
    
    // fetch api to get the specific product object
    const [selectedProductObj, setSelectedProductObj] = useState(null);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setSelectedProductObj(data);// set the state
        })
    }, [])


    // display

  return (
    selectedProductObj && 
    <div className="card">
        <div className="card-header">
            <h4>{selectedProductObj.title}</h4>
        </div>
        <div className='row'>
            <div className='col-4'>
                <img src={selectedProductObj.images[0]} alt="" height="200px"/>
            </div>
            <div className='col-8'>
                <div className="card-body">
                    <h5 className="card-title">Category: {selectedProductObj.category}</h5>
                    <p className="card-text">{selectedProductObj.description}</p>
                    <h5>Price: {selectedProductObj.price} $</h5>
                    <h6>Return Policy: {selectedProductObj.returnPolicy}</h6>
                    <a href="#" className="btn btn-primary"><i class="bi bi-cart-plus-fill"></i></a>
                    <a href="#" className="btn btn-warning ms-2"><i class="bi bi-pencil-fill"></i></a>
                    <a href="#" className="btn btn-danger ms-2"><i class="bi bi-trash3-fill"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}
