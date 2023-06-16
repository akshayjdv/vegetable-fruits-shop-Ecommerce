import './App.css';
import Navbar from './components/Navbar';
import "./index.css";
import {  Route,Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Newproduct from './pages/Newproduct';
import AllProducts from './pages/AllProducts';
import Signup from './pages/Signup';

import PrivateRoute from './components/PrivateRoute';
import PrivateAddProductRoute from './components/PrivateAddProductRoute.js';
import UpdateProduct from './pages/UpdateProduct';
import ProductById from './pages/ProductById';
import Cart from './pages/Cart';
import { useState } from 'react';
import { toast } from 'react-toastify';



const App = () => {

  const [cartItems,setCartItems] = useState([]);

  // const [warning,setWarning] = useState(false);

  // this is passed to allproducts - from there it is passed to productcard - in productcard it is onclick to collect productitems data
  const handleClick = (product) =>{
    console.log(product);

    
    let isPresent = false;

    
    cartItems.forEach( (currentProduct)=>{
      if(product._id === currentProduct._id)
      {
        isPresent=true;
      }
      
    })
    
    if(isPresent)
    {
      toast.error('this item is already present in cart')
      return;
      // setWarning(true);
      // setTimeout( ()=>{
        //   setWarning(false);
        // },2000)
      }
      
      if(!isPresent)
      {
        toast('item added to cart')
      }

    setCartItems([...cartItems,product])
    console.log(cartItems)
  }


  const handleChangeNoOfItemsIncDcr = (product,incORdcr) =>{
    // console.log(product,incORdcr)
    let initialIndex = -1;

    // alert('button clicked' + incORdcr)

    cartItems.forEach( (currentProduct,index)=>{
      if(currentProduct._id === product._id)
      {
        initialIndex = index;
      }
    });

    const temporaryArray = cartItems;

    temporaryArray[initialIndex].amount += incORdcr;
    
    if(temporaryArray[initialIndex].amount === 0)
    {
      temporaryArray[initialIndex].amount = 1;
    }

    setCartItems([...temporaryArray])

  }


  return (
    <>
      <Navbar productCount={cartItems.length}/>

      {/* fixed na lidhe bou locha avta ta */}
      <main className="pt-16">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} handleChangeNoOfItemsIncDcr={handleChangeNoOfItemsIncDcr} />} /> {/* we have passed cartitems list and its function so that we can show all items present in cart to cart page and modify - delete cart items if we need to */}
            <Route path="/about" element={<About />} />
            <Route path="/all-products" element={<AllProducts handleClick={handleClick} />} />
            <Route path="/product/:id" element={<ProductById handleClick={handleClick}/>} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />

            <Route element={<PrivateAddProductRoute />}>
              <Route path="/newproduct" element={<Newproduct />} />
              <Route path="/update-product/:id" element={<UpdateProduct />} />
            </Route>

          </Route>


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
