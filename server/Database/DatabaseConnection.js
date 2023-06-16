import mongoose from "mongoose";

const DatabaseConnection = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser : true})
        console.log('database connected successfully....')

    }catch(error){
        console.log(`error caught : ${error}`)
    }
}

export default DatabaseConnection