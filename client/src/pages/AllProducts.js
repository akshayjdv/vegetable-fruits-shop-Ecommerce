import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
// import {GrPrevious,GrNext} from 'react-icons/gr'
import FilterProductsByCategory from '../components/FilterProductsByCategory';
// import { current } from '@reduxjs/toolkit';
import { GiDutchBike } from "react-icons/gi";

const AllProducts = ({handleClick}) => {
    const [allProducts, setAllProducts] = useState([]);

    
    const [dataFilter,setDataFilter] = useState([])

    useEffect(() => {
      setDataFilter(allProducts);
    }, [allProducts]);

    const handleFilterProduct = (category) =>{
      const filter = allProducts.filter(
        (currentElem) =>
          currentElem.category.toLowerCase() === category.toLowerCase()
      );

      setDataFilter(() => {
        return [...filter];
      });
    }

    // console.log(allProducts)// we are getting all products here

    // all products mathi catgory wise filter krsu products , and e ek array hase all details hase ne product ni
    const fruitsList = allProducts.filter(currentProduct => currentProduct.category === 'fruits',[])
    const vegetablesList = allProducts.filter(currentProduct => currentProduct.category === 'vegetables',[])
    // console.log(fruitsList)//getting all products with category fruit

    const categoryList = [...new Set(allProducts.map(currentElem => currentElem.category))]

    // get all blogs
    const getAllProducts = async () => {
      // by default get method j hoi etle no need to specify it explicitly
      const response = await fetch("http://localhost:8000/all-products");

      // now j response male ene json ma feravyu
      const result = await response.json();

      // now check k kai error to nthi ne - result?.success no mtlb thai (result && result.success) mtlb result male to j agal ni condition chekc thai
      if (!result?.success) {
        alert(result.message);
      }

      if (result?.success) {
        console.log(result);
        setAllProducts(result?.allProducts);
      }
    };

    // jyare jyare page refresh thase tyare aa run thase ne getAllBlogs func call thase jna thi badha blogs malse
    useEffect(() => {
      getAllProducts();
    }, []);

  return (
    <>
      <div className="flex flex-col h-full">
        <h1 className="font-bold text-4xl text-slate-900 mb-5 my-10 mx-10">
          <span className="text-red-500">Vegetables</span> and{" "}
          <span className="text-red-500">Fruits</span> directly from Farm to
          Your Home, We Believe in{" "}
          <span className="text-red-500">Freshness,Fitness and Health</span>. We
          sell <span className="text-red-500">Organic</span>, Fresh and Healthy
          Products
        </h1>
        <div className="flex bg-slate-200 rounded-full w-[280px]  ml-10 px-2  justify-center p-2">
          <p className=" mr-2 ">Bike Delivery at your Doorstep</p>
          <GiDutchBike className="text-3xl" />
        </div>
      </div>

      <div className="p-2 md:p-4  ">
        <div className="flex w-full items-center ">
          <div className="">
            <h2 className="font-bold text-2xl text-slate-800 mb-5 ">
              Fresh Fruits
            </h2>
            {/* <div className="ml-5 flex gap-4 mt-12">
              <button className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded ">
                <GrPrevious />
              </button>
              <button className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded ">
                <GrNext />
              </button>
            </div> */}

            <div className="flex gap-5 flex-wrap justify-center ">
              {fruitsList.map((currentProduct) => {
                return (
                  <ProductCard
                    key={currentProduct._id}
                    id={currentProduct._id}
                    productname={currentProduct.productname}
                    category={currentProduct.category}
                    price={currentProduct.price}
                    image={currentProduct.image}
                    product={currentProduct}
                    handleClick={handleClick}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-2xl text-slate-800 mb-5 ">
            Fresh Vegetables
          </h2>
          <div className="flex gap-5 flex-wrap justify-center ">
            {vegetablesList.map((currentProduct) => {
              return (
                <ProductCard
                  key={currentProduct._id}
                  id={currentProduct._id}
                  productname={currentProduct.productname}
                  category={currentProduct.category}
                  price={currentProduct.price}
                  image={currentProduct.image}
                  product={currentProduct}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-2xl text-slate-800 mb-5 ">
            Filter Products
          </h2>

          <div className="flex gap-5 justify-center">
            {categoryList[0] &&
              categoryList.map((currentElem) => {
                return (
                  <FilterProductsByCategory
                    category={currentElem}
                    key={currentElem}
                    
                    onClick={() => handleFilterProduct(currentElem)}
                  />
                );
              })}
          </div>

          <div className="flex flex-wrap justify-center gap-5 my-5">
            {dataFilter.map((currentElem) => {
              return (
                <ProductCard
                  key={currentElem._id}
                  id={currentElem._id}
                  image={currentElem.image}
                  productname={currentElem.productname}
                  category={currentElem.category}
                  price={currentElem.price}
                  product={currentElem}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts
