const express=require('express')
const messageController=require('../controllers/sucess');

const router=express.Router();

router.get('/message',messageController.getMessage)

module.exports=router