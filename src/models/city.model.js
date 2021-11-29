const mongoose=require("mongoose")

const citySchema=new mongoose.Schema({

city_name:{type:String, required: true},

//job_type:{type:String, required: true},



 },
 {
versionKey:false,
timestamps:true
 })

 module.exports=mongoose.model("city",citySchema)