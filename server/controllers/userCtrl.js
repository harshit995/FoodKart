const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')

const registerController = async (req, res) => {

    let { name, email } = req.body

    if (!name || !email || !password) {
        res.status(422).json("fill all the fields...")
    }

    try {

        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            res.status(401).json("user already exist..")
        }
        else {
            const password = req.body.password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            req.body.password = hashedPassword;

            const newUser = new userModel({
                name, email, password
            })

            await newUser.save();
            res.status(200).json(newUser)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json("Register error...")
    }

}
const loginController = async () => {



}

module.exports = { loginController, registerController }