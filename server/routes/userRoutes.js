const express=require('express');
const { loginController, registerController } = require('../controllers/userCtrl');

const router=express.Router();

//routes
//login || post

router.post('/login',loginController)

//register
router.post('/register',registerController)

 

module.exports = router;