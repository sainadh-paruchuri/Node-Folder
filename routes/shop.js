const express=require('express')
const path=require('path')

const router=express.Router();
const routeDir=require('../util/path')


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','shop.html'))
})

module.exports=router