const { response } = require('express');
const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(442).json({error : "Please fill all the required fields correctly"});
    }

    User.findOne({email:email})
        .then((userExist) => {
            if(userExist) {
                return res.status(442).json({error : "Email already exists"});
            }

            const user = new User({name,email,phone,work,password,cpassword});
            user.save().then(() => {
                 res.status(201).json({message : "user registered successfully"});
            }).catch((err) => res.status(500).json({error : "Registeration falied"}));
        }).catch(err => {console.log(err)})
});

module.exports = router;