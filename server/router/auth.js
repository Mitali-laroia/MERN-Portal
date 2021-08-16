const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', async(req, res) => {
    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(442).json({error : "Please fill all the required fields correctly"});
    }

    try {
        const userExist = await User.findOne({email:email})
            if(userExist) {
                return res.status(442).json({error : "Email already exists"});
            } else if(password != cpassword) {
                return res.status(422).json({error: "password didn't match"});
            } else {
            const user = new User({name,email,phone,work,password,cpassword});
            //hashing is done before save
            await user.save();
            res.status(201).json({message : "user registered successfully"});
        }
        } catch (error) {
        console.log(error);
    }
});


router.post("/signin", async(req,res)=> {
    try {
        const {email,password} = req.body;

        if(!email||!password) {
            return res.status(400).json({error : "Please fill all the required fiels"});
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(`token is : ${token}`);
            res.cookie("jwtoken",token , {
                expires: new Date(Date.now()+ 25892000000),
                httpOnly: true
            })

            if(!isMatch) {
                res.status(400).json({message:"Invalid credentials"});
            } else {
                res.json({message : "user signin successfully"});
            } 
        } else {
                res.status(400).json({message: "Invalied credentials"});
            }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;