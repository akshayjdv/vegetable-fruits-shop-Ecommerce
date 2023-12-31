import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const ProductCard = ({productname,price,category,image,id,product,handleClick}) => {


  
  // const handleAddCartProduct = (product) =>{

  // }
  
  
  
  
  
  

    
  return (
    <>
      <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg  py-5 px-4 cursor-pointer flex flex-col">
        <NavLink
          to={`/product/${id}`}
          onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
        >
          <div className="h-28 flex justify-center items-center">
            <img src={image} alt="product" className="h-full" />
          </div>
          <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4">
            {productname}
            {/* {alert(productname)} */}
          </h3>
          <p className="text-slate-500 font-medium">{category}</p>
          <p className="font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
        </NavLink>
        <button
          key={id}
          className="bg-yellow-500 p-2 mt-2 rounded hover:bg-yellow-600"
          onClick={() => handleClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard
