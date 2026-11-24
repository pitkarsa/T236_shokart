import React from 'react'
import './Product.css'
import {NavLink} from 'react-router-dom'

export default function Product(props) {
    // console.log(props.obj); // props = { obj: {...... } }
    const productObject = props.obj;
    // console.log(productObject);
    
    
  return (
    <div className='col-4 mt-2'>
        <div className="card card-hover" style={{ width: "100%" }}>
            <img src={ productObject.images[0] } 
            className="card-img-top" alt="..." height="220px" />
            <div className="card-body">
                <h5 className="card-title">{productObject.title}</h5>
                <h6>Category: {productObject.category}</h6>
                <p className="card-text">{productObject.description}</p>
                <p><strong>{productObject.price} $</strong></p>
                {/* <a href="#" className="btn btn-primary">Details</a> */}
                <NavLink to={`/details/${productObject.id}`} className="btn btn-primary">Details</NavLink>
            </div>
        </div>
    </div>
  )
}
