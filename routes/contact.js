const express=require('express');

const path=require('path')

const routeDir=require('../util/path')

const router=express.Router();

router.get('/contact-form',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','contact-form.html'));

})
router.post('/contact-form',(req,res)=>{
    console.log(req.body)
    res.redirect('/message')
})

module.exports=router