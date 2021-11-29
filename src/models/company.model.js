const mongoose=require("mongoose")

const companySchema=new mongoose.Schema({

company_name:{type:String, required: true},

//company_type:{type:String, required: true},


 },
 {
versionKey:false,
timestamps:true
 })

 module.exports=mongoose.model("company",companySchema)