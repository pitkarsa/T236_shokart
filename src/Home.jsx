import React, { useEffect, useState } from 'react'
import Product from './Product';

export default function Home() {
    const [allProducts, setAllProducts] = useState([]);
    // when the state is updated, re-renders the comp
    const [count, setCount] = useState(0);

    // fetch('https://dummyjson.com/products')
    // .then(resp => resp.json())
    // .then(data => {
    //    console.log(data.products);
    //     setAllProducts(data.products); // state is updated
    // })
    // .catch(err => console.error(err));

    // useEffect(function, DL); -- it is used to avoid the side effect
    
    // whenever DL is updated, then the function will be executed.
    // useEffect(() => { fetch the data... }, []);
    // thumb rule: the DL should not mention the state, that is getting updated within the useEffect

    // DL is optional 
    //  useEffect(() => { fetch the data... }, []); - function will be executed only once
    // useEffect(() => { fetch the data... }, [count]); - function will be executed once when the comp is rendered and afterwards when count is updated
    // useEffect(() => { fetch the data... });
    // as DL is not mentioned, by default all 'states and props' are the part of DL [count, allProducts]

    useEffect(() => {
      console.log("function within useEffect is getting executed");      
      fetch('https://dummyjson.com/products')
        .then(resp => resp.json())
        .then(data => {
          console.log(data.products.slice(0,6)); // we are selecting object with index 0 to 5
            setAllProducts(data.products.slice(0,6)); 
            // state is updated
        })
        .catch(err => console.error(err));
     },[]);

     console.log("Home component rendered");
    //  const username= "samruddhi";
    //  const email = "samruddhi@itvedant.com";

  return (
    // <div>
    //   <button onClick={() => setCount(count+1) }>You have clicked {count} times</button>
    // </div>
    <>
      {/* {
        allProducts.map( prodObj => <h4 key={prodObj.id}>{prodObj.id} {prodObj.title}</h4>)
      } */}

        {/* props demo  
      <Product name={username} email={email} />
        {/* child gets the props object 
        props = { name:"samruddhi", email:"samruddhi@itvedant.com" }
        the props object is sent to child component Product
      */}

      <div className = "row">
        {
          allProducts &&
          allProducts.map(productObj => 
          <Product key={productObj.id} obj={productObj} />)
        }
      </div>
    </>
  )
}
