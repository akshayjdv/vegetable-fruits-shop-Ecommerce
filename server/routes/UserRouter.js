import express  from 'express';

import mongoose from 'mongoose';

const UserRouter = express.Router();


import User from '../model/UserSchema.js'

import bcrypt from 'bcrypt'



// signup api to signup new user
UserRouter.post('/signup',async(req,res)=>{

    const {firstName,lastName,email,password,confirmpassword,image} = req.body;
    try{

        if(!firstName || !email || !password )
        {
            return res.status(400).json({
                success : false,
                message : 'firstName, email, and password all fields are required, please fill all fields.'
            })
        }

        const existingUser = await User.findOne({email:email});

        if(existingUser)
        {
            return res.status(400).json({
                success : false,
                message : 'you cannot signup with this email, user already exists with this email id.'
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const userAdded = await User.create({
          firstName,
          lastName,
          email,
          password:hashedPassword,
          confirmpassword:hashedPassword,
          image,
        });

        return res.status(201).json({
            success : true,
            message : 'user registered successfully',
            userAdded
        })

    }catch(error){
        console.log(error)

        return res.status(400).json({
            error: error.message
        })
    }
})

// login api to login registered user
UserRouter.post('/login',async(req,res)=>{

    const {email,password} = req.body;
    try{
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message:
            "email(username) and password both fields are required. please fill all details.",
        });
      }

      const validUser = await User.findOne({ email: email });

      if (!validUser) {
        return res.status(200).json({
          success: false,
          message: "user is not registerd, no user found with this email.",
        });
      }

      const isPasswordMatch = await bcrypt.compare(
        password,
        validUser.password
      );

      // if password dont match
      if (!isPasswordMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid Username or Password",
        });
      }


      return res.status(200).json({
        success: true,
        message: "login successfull..",
        validUser,
      });
    }catch(error){
        console.log(error);

        return res.status(500).json({
            success:false,
            message:'error in login callback',
            error
        })
    }
})


export default UserRouter