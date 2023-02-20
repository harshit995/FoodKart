const express = require('express');
const { loginController, registerController, authcontroller } = require('../controllers/userCtrl');
const Authenticate = require('../middlewares/authmiddleware');

const router = express.Router();

//routes
//login || post

router.post('/login', loginController)

//register
router.post('/register', registerController)

router.get('/getuserdata', Authenticate, authcontroller)




module.exports = router;