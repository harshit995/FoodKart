const express = require("express")
const router = express.Router()
const { getAllDoctorsController, getAllUsersController } = require("../controllers/adminCtrl")
const Authenticate = require("../middlewares/authmiddleware");


router.get("/getallusers", Authenticate, getAllUsersController)
router.get("/getalldoctors", Authenticate, getAllDoctorsController)
module.exports = router