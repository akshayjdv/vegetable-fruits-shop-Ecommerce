import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import {FiEdit2} from 'react-icons/fi'
import {MdDeleteOutline} from 'react-icons/md'
import { toast } from 'react-toastify';

const ProductById = ({  handleClick }) => {
  const [allProducts, setAllProducts] = useState([]);

  const navigate = useNavigate();

  //
  let loggedUser = localStorage.getItem("user");
  const admin = JSON.parse(loggedUser)?.validUser.email;
  //

  const { id } = useParams();

  const [data, setData] = useState({
    productname: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  // to display main product and its description
  const getProductById = async () => {
    const response = await fetch(`http://localhost:8000/product/${id}`);

    const result = await response.json();

    // if any errors
    if (!result?.success) {
      console.log(result.message);
    }

    // if everything is perfectly fine without any error
    if (result?.success) {
      // alert("preveous values" + result);
      // console.log(result.singleProductById.productname)

      setData({
        productname: result.singleProductById.productname,
        category: result.singleProductById.category,
        image: result.singleProductById.image,
        price: result.singleProductById.price,
        description: result.singleProductById.description,
        amount:1
      });
    }
  };

  // to show related prodducts section
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

  const handleEdit = () => {
    navigate(`/update-product/${id}`);
  };

  const handleDelete = async () => {
    // call api to delete blog with particular id to delete blog - with help of fetch method
    const response = await fetch(`http://localhost:8000/delete-product/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    // if any errors caught
    if (!result?.success) {
      console.log(result?.message);
      alert(result?.message);
      // console.log(blogId)
    }

    // if everything fine and blog gets deleted
    if (result?.success) {
      toast("product Deleted Successfylly....");

      navigate("/all-products");

      // wait from 2 seconds and navigate it to all blogs page
      // if myblogs thi delete kriye to all blogs ma navigation perfect thai che but all blogs thi delete kriye to refresh nthi thatu page var lage etle
      // apde location check krsu - jo all-blogs page thi delete kryu hoi to forcefully page reload krsu ne myblogs thi delete kryu hase to navigate krsu all blogs page pr
    }
  };

  const relatedProductList = allProducts.filter(
    (currentProduct) => currentProduct.category === `${data.category}`,
    []
  );

  useEffect(() => {
    getAllProducts();
    getProductById();
  }, [id]);

  return (
    <>
      <div className="p-4 md:py-6 md:p-4">
        <div className="w-full max-w-4xl  m-auto flex bg-white p-1">
          <div className="max-w-md drop-shadow overflow-hidden max-h-sm w-full p-5 ">
            <img
              src={data.image}
              alt=""
              className="hover:scale-10S transition-all h-full"
            />
          </div>
          <div className=" ">
            <div className=" flex ">
              <h3 className="font-semibold text-slate-600  text-center capitalize text-2xl mt-4 md:text-4xl">
                {data.productname}
                {/* {alert(productname)} */}
              </h3>

              {admin === "admin@admin.com" && (
                <span className="ml-auto p-7 flex gap-2 justify-center items-center">
                  <FiEdit2
                    className="text-2xl cursor-pointer"
                    onClick={handleEdit}
                  />
                  <MdDeleteOutline
                    className="text-3xl cursor-pointer"
                    onClick={handleDelete}
                  />
                </span>
              )}
            </div>

            <p className="text-slate-500 font-medium text-2xl">
              {data.category}
            </p>
            <p className="font-bold md:text-2xl">
              <span className="text-red-500">₹</span>
              <span>{data.price}</span>
            </p>
            <div className="flex gap-3">
              <button className="bg-green-500 p-2 mt-2 rounded hover:bg-green-600 min-w-[100px]">
                Buy
              </button>
              <button
                className="bg-green-500 p-2 mt-2 rounded hover:bg-green-600 min-w-[100px]"
                onClick={() => handleClick(data)}
              >
                {" "}
                Add to Cart
              </button>
            </div>
            <div className="text-slate-600 font-medium">
              <p>Description : </p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-2xl text-slate-800 mb-5 mt-2">
          Related Products
        </h2>
        <div className="flex gap-5 flex-wrap justify-center ">
          {relatedProductList.map((currentProduct) => {
            return (
              <ProductCard
                key={currentProduct._id}
                id={currentProduct._id}
                productname={currentProduct.productname}
                category={currentProduct.category}
                price={currentProduct.price}
                image={currentProduct.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductById
