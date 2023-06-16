import React, {  useEffect, useState } from "react";
import logo from "../assest/men.jpg";
import "../index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { toast } from "react-toastify";








const Navbar = ({productCount}) => {
  const [showMenu, setShowMenu] = useState(false);

  // fetch from localstorage user value
  let loggedUser = localStorage.getItem("user");

  // get dp from local storage stored value - if user logged in than after ? fetch validUser and image - if not then not return any value
  const dp = JSON.parse(loggedUser)?.validUser.image;
  const admin = JSON.parse(loggedUser)?.validUser.email;
  const userName = JSON.parse(loggedUser)?.validUser.firstName;
  

  const navigate = useNavigate();

  // logout functionality mate logout function j data localstorage thi delete krse
  const logout = () => {
    // clears local storage by this func
    
    localStorage.clear();
    window.location.reload();
    toast("user logout successfully" );
    navigate("/login");
  };

  


  const handleShowMenu = () =>{
    setShowMenu(preve => !preve)
  }

  
  return (
    <>
      {/* fixed hatu aya */}
      <header className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-white z-50">
        {/* desktop version */}
        <div className="flex items-center h-full justify-between">
          <NavLink>
            <div className="h-16">
              <img src={logo} alt="logo" className="h-full " />
            </div>
          </NavLink>

          <div className="flex items-center gap-4 md:gap-7">
            <nav className="gap-4 md:gap-7 text-base md:text-lg hidden md:flex">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-products">Products</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            <div className="text-2xl text-slate-600 relative">
              <NavLink to="/cart">
                <BsCartFill />
                <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center justify-center items-center ">
                  <span className="">{productCount}</span>
                </div>
              </NavLink>
            </div>

            <div className=" text-slate-600 " onClick={handleShowMenu}>
              <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                {dp ? (
                  <img src={dp} alt="user" className="h-full w-full " />
                ) : (
                  <HiOutlineUserCircle />
                )}
                <HiOutlineUserCircle />
              </div>
              {showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 shadow deop-shadow-md flex flex-col min-w-[120px] text-ellipsis">
                  {admin === "admin@admin.com" && (
                    <NavLink
                      to="/newproduct"
                      className="whitespace-nowrap cursor-pointer "
                    >
                      New Product
                    </NavLink>
                  )}

                  {loggedUser ? (
                    <p className="cursor-pointer" onClick={logout}>
                      Logout ({userName})
                    </p>
                  ) : (
                    <NavLink
                      to="/login"
                      className="whitespace-nowrap cursor-pointer"
                    >
                      Login
                    </NavLink>
                  )}

                  <nav className="flex flex-col  text-base md:text-lg md:hidden">
                    <NavLink to="/" className="px-2 py-1">
                      Home
                    </NavLink>

                    <NavLink to="/all-products" className="px-2 py-1">
                      Products
                    </NavLink>
                    <NavLink to="/about" className="px-2 py-1">
                      About
                    </NavLink>
                    <NavLink to="/contact" className="px-2 py-1">
                      Contact
                    </NavLink>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile version */}
      </header>
    </>
  );
};

export default Navbar;
