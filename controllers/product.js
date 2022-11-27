const path=require('path')
const routeDir=require('../util/path')

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','add-product.html'))
}

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
}

exports.getProduct=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','shop.html'))
}

