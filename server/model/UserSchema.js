
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: {
                type: String
             },
  lastName: { 
                type: String
            },
  email: { 
            type: String,
            unique: true
         },
  password: { 
                type: String
            },
  confirmpassword: {
                         type: String
                    },
  image: { 
            type: String
         },
});

const User = mongoose.model('User',UserSchema);

export default User;