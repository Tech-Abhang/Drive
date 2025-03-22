const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const userModels = require("../models/user.model.js");
const bcrypt = require('bcrypt');

router.get('/test' , (req,res)=>{
    res.send('test');
})

router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',
    check('email').trim().isEmail().isLength({min:13}),
    check('password').trim().isLength({min:5}),
    check('username').trim().isLength({min:3}),
    async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array(),message:"invalid data"});
    }

    const {email,username ,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await userModels.create({
        email : email,
        username : username,
        password : hashedPassword
    })
    res.send(newUser);
})

module.exports = router;