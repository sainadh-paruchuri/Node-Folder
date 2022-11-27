const path=require('path')
const routeDir=require('../util/path')

exports.getMessage=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','message.html'))
}