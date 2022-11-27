const path=require('path')
const routeDir=require('../util/path')

exports.get404=(req,res,next)=>{
    res.status(404).sendFile(path.join(routeDir,'views','404.html'))
}