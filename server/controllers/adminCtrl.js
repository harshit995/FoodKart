const doctorModel = require("../models/doctorModel")
const userModel = require("../models/userModel")

const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find({})
        res.status(200).json(doctors)
    } catch (error) {
        res.status(400).json("get all doctors error...")
    }
}

const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json("get all users error...")
    }
}

module.exports = { getAllDoctorsController, getAllUsersController }