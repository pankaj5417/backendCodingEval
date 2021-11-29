const express=require("express")
const Job=require("../models/job.model")
const crudController=require("./crud.controller")

const router=express.Router()

router.post("",crudController.post(Job))


router.get("/", async (req, res) => {
    try {
      const items = await Job.find().sort({job_rating:1}).lean().exec();

      const item= await Job.find({job_type:"work from home"}).lean().exec()
  
      return res.send(item);
      
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  })

router.get("/:id",crudController.getOne(Job))

router.patch("/:id",crudController.updateOne(Job))

router.delete("/:id",crudController.deleteOne(Job))


module.exports=router