import mongoose from 'mongoose'

const userScheme = new mongoose.Schema({
    token: {type:String,required:true,unique:true},
    reward: {type:Number,required:true,default:20}   
})

const userModel = mongoose.models.user || mongoose.model('user',userScheme)
export default userModel;