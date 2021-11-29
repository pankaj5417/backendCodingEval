const express=require("express")

const jobController=require("./controllers/job.controller")
const companyController=require("./controllers/company.controller")

const cityController=require("./controllers/city.controller")


const app=express()
app.use(express.json())

app.use("/jobs",jobController)

app.use("/companies",companyController)

app.use("/cities",cityController)

module.exports=app

