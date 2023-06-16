import React, { useEffect, useState } from "react";
import "../index.css";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    if (email && password) {
      const response = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!result?.success) {
        setData("");
        toast("error while login " + result?.message);
      }

      if (result?.success) {
        // console.log(result.validUser)
        setData("");
        toast(result?.message);

        navigate("/");

        




        // after successfull login we,store data to localstorage of browser for login logout functionality
        // user nam na object ma store thase email and password
        // akho user store kravva krta khali user ni id store kraviye to?
        localStorage.setItem("user", JSON.stringify(result));


        

        // console.log(dp);
      }

      
    } else {
      alert("please fill all fields");
    }
  };

  // user login che to user farithi login page pr na javo joiye - ene login page k login no option j na dekhavo joiye
  useEffect(() => {
    // checks user is login or not
    const User = localStorage.getItem("user");


    if (User) {

       
      // if user is logged in - login page this will navigate to main home page
      navigate("/");
    }
  }, []);


  

  return (
    <>
      <div className="p-3 md:p-5 flex flex-col">
        <div className="w-full max-w-sm bg-slate-100 m-auto flex items-center flex-col p-4">
          <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
            <img src={loginSignupImage} alt="login" className="w-full" />
          </div>

          <form action="" className="w-full py-2" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.email}
              onChange={handleOnChange}
            />

            <label htmlFor="password">Password</label>
            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-slate-200 border-none outline-none"
                value={data.password}
                onChange={handleOnChange}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-green-600 cursor-pointer text-xl text-white font-medium text-center py-1 rounded mt-4 "
            >
              Login
            </button>
          </form>
          <p className="text-left text-sm mt-3">
            Dont have an account ?{" "}
            <NavLink to="/signup" className="text-red-500 underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};


export default Login;

