import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import User from './model/UserSchema.js'

import bcrypt from 'bcrypt'

import UserRouter from './routes/UserRouter.js'

import ProductRouter from './routes/ProductRouter.js'

import DatabaseConnection from './Database/DatabaseConnection.js'

dotenv.config()



const app = express()

app.use(express.json({limit : '10mb'}))
app.use(cors())

app.use(UserRouter)
app.use(ProductRouter)

const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.send('server is running')
})


DatabaseConnection();

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})