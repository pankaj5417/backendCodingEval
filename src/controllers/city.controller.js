const express=require("express")
const City=require("../models/city.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("",crudController.post(City))
router.get("",crudController.getAll(City))

router.get("/:id",crudController.getOne(City))

router.patch("/:id",crudController.updateOne(City))

router.delete("/:id",crudController.deleteOne(City))


module.exports=router