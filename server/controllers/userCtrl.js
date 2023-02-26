const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const doctorModel = require("../models/doctorModel")


const registerController = async (req, res) => {

    let { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(422).json("fill all the fields...")
    }

    try {

        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            res.status(401).json("user already exist..")
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            password = hashedPassword;

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
const loginController = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: "please filled the data.." })
    }

    try {
        let token;
        const user = await userModel.findOne({ email: email })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                res.status(400).json("incorrect details...")
            } else {
                //to generate JWT TOKEN 
                token = await user.generateAuthToken();
                console.log("the token is", token)

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25000000),
                    httpOnly: true
                })
                user.password = undefined;
                res.status(200).json(user)
            }

        } else {
            res.status(400).json("incorrect details...")
        }
    } catch (error) {
        res.status(400).json("Error in login..")
    }

}

const authcontroller = async (req, res) => {
    // console.log(req.rootuser)
    res.status(200).send(req.rootUser);
}



const applydoctorcontroller = async (req, res) => {

    const { firstname, lastname, email, phone, website, address, specialization, experience, feesPerCunsaltation, timings } = req.body;

    if (!firstname || !lastname || !email || !phone || !address || !specialization || !experience || !feesPerCunsaltation || !timings) {
        return res.status(400).json("fill all the fields...")
    }

    try {
        const existingUser = await doctorModel.findOne({ email: email });

        if (existingUser) {
            res.status(401).json("user already exist..")
        }
        else {
            const newDoctor = new doctorModel({
                firstname, lastname, email, phone, website, address, specialization, experience, feesPerCunsaltation, timings, status: "pending"
            })
            console.log("else part")
            await newDoctor.save();
            console.log("after save")
            console.log("new doctor is ..")
            console.log(newDoctor)
            const adminUser = await userModel.findOne({ isAdmin: true })
            const notification = adminUser.notification
            notification.push({
                type: 'apply-doctor-request',
                message: `${newDoctor.firstname} ${newDoctor.lastname} Has Applied For a Doctor Account`,
                data: {
                    doctorId: newDoctor._id,
                    name: newDoctor.firstname + " " + newDoctor.lastname,
                    onClickpath: '/admin/doctors'
                }
            })
            await userModel.findByIdAndUpdate(adminUser._id, { notification });
            res.status(200).json(newDoctor)

        }
    }
    catch (error) {
        res.status(400).send("Apply doctor error....")
    }

}

// const logoutcontroller = async (req, res) => {
//     res.clearCookie('jwtoken', { path: '/' });
//     res.status(200).send("User Logout")
// }

const notificationcontroller = async (req, res) => {
    try {

    } catch (error) {
        console.log("notification error....")
    }
}

module.exports = { loginController, registerController, authcontroller, applydoctorcontroller, notificationcontroller }