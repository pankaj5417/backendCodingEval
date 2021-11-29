const express=require("express")
const Company=require("../models/company.model")
const crudController=require("./crud.controller")

const router=express.Router()
router.post("",crudController.post(Company))
router.get("",crudController.getAll(Company))

router.get("/:id",crudController.getOne(Company))

router.patch("/:id",crudController.updateOne(Company))

router.delete("/:id",crudController.deleteOne(Company))


module.exports=router