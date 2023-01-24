const userModel=require("../models/userModel")
const bcrypt =require('bcryptjs')

const  registerController=async()=>{
    
    const { name , email , password } =req.body

    if(!name || !email || !password ){
        return res.status(422).json({error:"fill all the fields..."})
    }

   try {

    const existingUser=await userModel.findOne({email:email});

    if(existingUser){
        return res.status(200).send({message:"user already exist.."})
    }

    



} catch (error) {
    console.log(eror)
    res.status(500).send({error:"Register error..."})
}

}
const loginController =async ()=>{

    

}

module.exports={loginController,registerController}