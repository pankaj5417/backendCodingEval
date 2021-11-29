const mongoose=require("mongoose")

const jobSchema=new mongoose.Schema({

job_title:{type:String, required: true},

job_type:{type:String, required: true},

skill:{type:String, required: true},
job_rating:{type:String, required: true},

city_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"city",
    
}

 },
 {
versionKey:false,
timestamps:true
 })

 module.exports=mongoose.model("job",jobSchema)