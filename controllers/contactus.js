const path=require('path')
const routeDir=require('../util/path')

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','contact-form.html'));

}

exports.postContact=(req,res)=>{
    console.log(req.body)
    res.redirect('/message')
}

