import React, { useEffect, useState } from 'react'
import {TbPlus,TbMinus} from 'react-icons/tb'
import {AiFillDelete} from 'react-icons/ai'
import { toast } from 'react-toastify';

const Cart = ({ cartItems, setCartItems, handleChangeNoOfItemsIncDcr }) => {
  const [price, setPrice] = useState(0);

  console.log(cartItems);

  // to handle total price of all items present in cart
  const handleTotalPriceOfAllItems = () => {
    let finalTotalPrice = 0;

    cartItems.map((currentProduct) => {
      finalTotalPrice =
        finalTotalPrice + currentProduct.amount * currentProduct.price;
    });

    setPrice(finalTotalPrice);
  };

  // to remove any item from cart
  const handleRemoveItemFromCart = (id) => {
    const updatedCartList = cartItems.filter(
      (currentProduct) => currentProduct._id !== id
    );
    setCartItems(updatedCartList);
    handleTotalPriceOfAllItems();
    toast("item removed from cart");
  };

  useEffect(() => {
    handleTotalPriceOfAllItems();
  });

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 ">
          Your Cart Items
        </h2>

        {cartItems.length === 0 ? (
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 text-center">
            Your Cart Seems Empty
          </h2>
        ) : (
          <div className="w-full  max-w-4xl mt-6 ">
            {cartItems.map((currentProduct) => {
              return (
                <div className="">
                  {/* <div className="cart_box" key={currentProduct._id}>
                  <div className="cart_img">
                    <img src={currentProduct.image} alt="product-photu" />
                    <p>{currentProduct.productname}</p>
                  </div>

                  <div>
                    <button>+</button>
                    <button>{currentProduct.amount}</button>
                    <button>-</button>
                  </div>

                  <div>
                    <span>{currentProduct.price}</span>
                    <button
                      onClick={() =>
                        handleRemoveItemFromCart(currentProduct._id)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      Remove
                    </button>
                  </div>
                </div> */}

                  <div className="">
                    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
                      <div className="p-3 bg-white rounded overflow-hidden">
                        <img
                          src={currentProduct.image}
                          alt="photu"
                          className="h-28 w-36 object-cover"
                        />
                      </div>

                      <div className=" flex flex-col gap-1 w-full">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
                            {currentProduct.productname}
                          </h3>

                          <div
                            className="cursor-pointer text-slate-700 hover:text-red-500 p-2 text-xl"
                            onClick={() =>
                              handleRemoveItemFromCart(currentProduct._id)
                            }
                          >
                            <AiFillDelete />
                          </div>
                        </div>

                        <p className="text-slate-500 font-medium ">
                          {currentProduct.category}
                        </p>
                        <p className="font-bold text-base">
                          <span className="text-red-500">₹</span>
                          <span>{currentProduct.price}</span>
                        </p>

                        <div className="flex justify-between ">
                          <div className="flex gap-3 items-center">
                            <button
                              onClick={() =>
                                handleChangeNoOfItemsIncDcr(currentProduct, +1)
                              }
                              className="bg-slate-300 p-2 mt-2 rounded hover:bg-slate-400 "
                            >
                              <TbPlus />
                            </button>
                            <p className="font-semibold p-1">
                              {currentProduct.amount}
                            </p>
                            <button
                              onClick={() =>
                                handleChangeNoOfItemsIncDcr(currentProduct, -1)
                              }
                              className="bg-slate-300 p-2 mt-2 rounded hover:bg-slate-400 "
                            >
                              <TbMinus />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 font-bold text-slate-700">
                            <p>Total : </p>
                            <p>
                              {currentProduct.price * currentProduct.amount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>



                    
                  </div>
                </div>
              );
            })}

            <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300  justify-between">
              <span className="font-bold text-slate-700">Total Price: </span>
              <span className="text-red-500 font-bold">₹ {price}</span>
            </div>
            <div className="bg-slate-300 hover:bg-slate-400 p-2 flex gap-4 rounded border border-slate-300  justify-center">
              <button className="font-bold text-slate-900 hover:text-red-700">Click here for Payment </button>
            </div>

            {/*  */}
            {/*  */}

            {/* <div className="w-full max-w-md ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg boreder-b">
                <p>Total Price: </p>
                <p className="ml-auto w-32 font-bold">
                  {" "}
                  <span className="text-red-500">₹ </span>
                  {price}
                </p>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
                Payment
              </button>
            </div> */}

            {/*  */}
            {/*  */}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart


