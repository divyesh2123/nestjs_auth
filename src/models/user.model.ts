import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},

})

