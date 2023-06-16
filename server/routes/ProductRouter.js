import express from "express";

import Product from "../model/ProductSchema.js";

const ProductRouter = express.Router();

ProductRouter.post('/add-product',async(req,res)=>{
    const {productname,category,image,price,description} = req.body;

    try{
        if(!productname || !category || !price || !description)
        {
            return res.status(400).json({
                success:false,
                message:'please fill all fields as all fields are required.'
            })
        }

        const productAdded = await Product.create({
          productname,
          category,
          image,
          price,
          description,
          amount : 1,
        });

        return res.status(201).json({
          success: true,
          message: "product added successfully",
          productAdded,
        });
    }
    catch(error)
    {
        console.log(error)

        return res.status(400).json({
            success : false,
            message : 'error while adding new product'
        })
    }
})


// get all products api - method GET
ProductRouter.get('/all-products', async(req,res)=>{
    try{
        // find method on collection to get all products - all documents
        const allProducts = await Product.find();

        // if you dont find any products
        if(!allProducts)
        {
            return res.status(200).json({
              success: false,
              message: "OOPs, No Products Found...",
            });
        }

        // if reach here - means products have been found, display them in response

        return res.status(200).json({
          success: true,
          productCount: allProducts.length,
          message: "All Products List ",
          allProducts,
        });
    }
    catch(error){
        console.log(error);

        return res.status(500).json({
          success: false,
          message: "Error While Fetching Products",
          error,
        });
    }
});


// get single product by id
ProductRouter.get("/product/:id", async (req, res) => {
  // req.params fetches id from url pattern of req - only id works else not
  const { id } = req.params;

  //alert(productId)

  try {
    // fing blog by id from blog collection(table)
    const singleProductById = await Product.findById({ _id: id });

    // if not found
    if (!singleProductById) {
      return res.status(400).json({
        success: false,
        message: "product not found with this id",
      });
    }

    // aya pochya mtlb blog present to chhe

    return res.status(200).json({
      success: true,
      message: "fetched product by this id",
      singleProductById,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error while fetching single product by id",
      error,
    });
  }
});

// update a blog by particular id - method PATCH
ProductRouter.patch('/update-product/:id',async(req,res)=>{

    // we will be updating blog based on its id so we will require id from url - done by params hook
    const {id} = req.params;

    // user will provide in requqest what to updte like title and description

    const { productname, category, image, price, description } = req.body;


    try{
        // _id e valu id hase j collection ma che ne id j apde req ma pass kryu, match thase to ema update
        // operation perform thase, req.body pass kryu - ani jgya e name:name,email:email aam pn kri sakai
        // new true thi newly updated value response ma malse

        const updatedProduct = await Product.findByIdAndUpdate({_id:id},req.body,{new:true});

        return res.status(200).json({
          success: true,
          message: "product updated successfully",
          updatedProduct,
        });
    }
    catch(error)
    {
        console.log(error)
        return res.status(400).json({
          success: false,
          message: "Error while updating the product",
          error,
        });
    }
});

// delete a blog by particular id - method DELETE
ProductRouter.delete('/delete-product/:id',async(req,res)=>{

    // get id with help of params
    const {id} = req.params;


    try{
        // akho blog to delete thai gyo pn e blog ma user ma j id che e pn delete krvu pdse
        // populate thi koi pn particular vastu hide krai ya batavai - user ne  - populate is like join - referance key ni jm - join with user nu collection thase by populate then nextline ma deletesingleuser che ema user hase {by id } ena thi bija collection sathe join thaya - ema blogs array che user ma ema thi aa deletesingleuser pull kryo - delete kryo bcz blog ni andar blogs j create krya e user e eni id hase e id remove krsu apde as a akho blog j delete kriye chhiye apde
        const deleteSingleProductById = await Product.findByIdAndDelete(id)

        

        return res.status(200).json({
          success: true,
          message: "product deleted successfully..",
          deleteSingleProductById
        });
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
          success: false,
          message: "Error while deleting product by id",
          error,
        });
    }
});



export default ProductRouter
