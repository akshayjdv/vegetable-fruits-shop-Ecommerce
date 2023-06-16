import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImageToBase64 } from '../utility/ImageToBase64'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Newproduct = () => {

  const [data,setData] = useState({
    productname:'',
    category:'',
    image:'',
    price:'',
    description:''
  });

  const navigate = useNavigate()

  const handleOnChange = (e) =>{
    const {name,value} = e.target;

    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }

  const uploadImage = async(e) =>{
    const imageData = await ImageToBase64(e.target.files[0])

    setData((preve)=>{
      return{
        ...preve,
        image : imageData
      }
    })
  }

  const handleSubmit = async( e) =>{
    e.preventDefault();


    // console.log(data)

      const { productname,category,image,price,description } = data;

      if(productname && category && image && price && description)
      {
        const response = await fetch(`http://localhost:8000/add-product`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (!result?.success) {
          setData("");
          toast("error while adding new product " + result?.message);
        }

        if (result?.success) {
          // console.log(result.validUser)
          setData("");
          toast(result?.message);

          // navigate("/");
        }
      }
      else{
        toast('please fill all fields, all details are necessary')
      }
      
  }

  return (
    <>
      {/* <h1>new products page</h1>  */}
      <div className="p-4">
        <form className="m-auto w-full max-w-md drop-shadow shadow flex flex-col p-3 bg-white" onSubmit={handleSubmit}>
          <label htmlFor="productname">Product Name</label>
          <input type="text" name="productname" className="bg-slate-200 p-1 my-1" onChange={handleOnChange}/>

          <label htmlFor="category" >
            Category
          </label>
          <select id='category' name='category' className="bg-slate-200 p-1 my-1" onChange={handleOnChange}>
            <option value='other'>Select Category</option>
            <option value='fruits'>Fruits</option>
            <option value='vegetables'>Vegetables</option>
            <option value='juice'>Fruit Juice</option>
            <option value='fruit shakes'>Fruit Shake</option>
            <option value='thick shakes'>Thick Shake</option>
            <option value='icecream'>Icecream</option>
          </select>

          <label htmlFor="image" >
            Image
            <div className="h-40 w-full bg-slate-300 my-1 rounded flex items-center justify-center cursor-pointer">
            {
              data.image ? <img src={data.image} alt="product-photu" className='h-full' /> : <span className="text-3xl"><BsCloudUpload  /></span>
            }
              
              
              <input type="file" id='image' name='image' accept='image/*' onChange={uploadImage} className='hidden' />
            </div>
          </label>

          <label htmlFor="price" className="my-1">
            Price
          </label>
          <input type="text" name="price" className="bg-slate-200 p-1 my-1" onChange={handleOnChange}/>

          <label htmlFor="description" className="my-1">
            Description
          </label>
          <textarea
            rows={4}
            name="description"
            className="bg-slate-200 p-1 my-1 resize-none"
            onChange={handleOnChange}
          />

          <button className="bg-slate-400 hover:bg-slate-600 text-white text-lg font-medium my-2 drop-shadow rounded">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Newproduct
