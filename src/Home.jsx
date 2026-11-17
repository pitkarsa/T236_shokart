import React, { useState } from 'react'

export default function Home() {
    const [allProducts, setAllProducts] = useState(null);

    fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(data => {
       // console.log(data.products);
        setAllProducts(data.products); // state is updated
    })
    .catch(err => console.error(err));

  return (
    <div>Home</div>
  )
}
