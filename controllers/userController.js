const User = require("../models/User")
const bcrypt = require('bcrypt')

exports.registerController = async (req,res) => {
    try {
        //all fields are filled or not
        const{phoneNumber,name,email,password} = req.body;
        if(!phoneNumber || !name || !email || !password){
            return res.status(400).send({
                message:"Fill all the fields",
                success:false
            })
        }
        //existing user check
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(500).send({
                message:"User already registered",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        //save new user
        const user = new User({phoneNumber,name,email,password:hashedPassword})
        await user.save();
        return res.status(200).send({
            message:"New User created successfully",
            success:true,
            user
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"Error in registered",
            success:false,
            error
        }) 
    }
};


//login users 
exports.loginController = async(req,res) => {
    try {
        const{email} = req.body;
        if(!email){
            return res.status(401).send({
                message:"Please provide email",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(200).send({
                message:"Email is not registered",
                success:false
            })
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"Error in login",
            success:false,
            error
        })  
    }
};