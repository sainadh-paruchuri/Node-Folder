const express=require('express')
const path=require('path')

const routeDir=require('../util/path')

const router=express.Router();

router.get('/message',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','message.html'))
})

module.exports=router