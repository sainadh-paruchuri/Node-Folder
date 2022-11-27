const express=require('express');
const contactController=require('../controllers/contactus');

const router=express.Router();

router.get('/contact-form',contactController.getContact)
router.post('/contact-form',contactController.postContact)

module.exports=router