import React, { useState } from "react";
import "../index.css";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { ImageToBase64 } from "../utility/ImageToBase64";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image : ''
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) =>{
    const {name,value} = e.target;

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }


  const handleUploadProfileImage = async(e) =>{
    const data = await ImageToBase64(e.target.files[0])

    setData( (preve) =>{
      return{
        ...preve,
        image : data
      }
    })
  }


  const handleSubmit = async(e) =>{
    e.preventDefault();

    const {firstName,email,password,confirmpassword} = data;

    if(firstName && email && password && confirmpassword)
    {
        if(password === confirmpassword)
        {
          const response = await fetch('http://localhost:8000/signup',{
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
              'Content-Type' : 'application/json'
            }
          })

          const result = await response.json();

          if(!result?.success)
          {
            toast(result?.message)
          }

          if(result?.success)
          {
            setData('')
            toast(result?.message)
            navigate('/login')
          }
            
        }else{
            toast('password and confirm password not match')
        }
    }else{
        toast('please fill all fields')
    }
  }

  return (
    <>
      <div className="p-3 md:p-5 flex flex-col">
        <div className="w-full max-w-sm bg-slate-100 m-auto flex items-center flex-col p-4">
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
            <img src={data.image ? data.image : loginSignupImage} alt="login" className="w-full h-full" />

            <label htmlFor="profileImage">
              <div className="absolute bottom-0 h-1/3 bg-slate-600 w-full text-center cursor-pointer">
                <p className="text-sm p-1/2 text-white">upload</p>
              </div>

              <input type="file" accept="image/*" id="profileImage" className="hidden " onChange={handleUploadProfileImage}/>
            </label>
          </div>

          <form action="" className="w-full py-2" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.firstName}
              onChange={handleOnChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.lastName}
              onChange={handleOnChange}
            />

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
                className=" w-full bg-slate-200  border-none outline-none"
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

            <label htmlFor="confirmpassword">Confirm Password</label>
            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmpassword"
                name="confirmpassword"
                className=" w-full bg-slate-200  border-none outline-none"
                value={data.confirmpassword}
                onChange={handleOnChange}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-green-600 cursor-pointer text-xl text-white font-medium text-center py-1 rounded mt-4 "
            >
              Sign Up
            </button>
          </form>
          <p className="text-left text-sm mt-3">
            Already have an account ?{" "}
            <NavLink to="/login" className="text-red-500 underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>

      
    </>
  );
};

export default Signup;
