const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const userModels = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    res.json(newUser);
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',
    check('username').trim().isLength({min:3}),
    check('password').trim().isLength({min:5}),
    async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array(),message:"invalid data"});
    }
    const {username,password} = req.body;
    const user = await userModels.findOne({
        username:username
    })
    if(!user){
        return res.status(400).json({message:"username incorrect"});
    }
    console.log("Input password:", password);
    console.log("Stored hash:", user.password);

    const inMatch = await bcrypt.compare(password,user.password);
    if(!inMatch){
        return res.status(400).json({message:"username or password is incorrect"});
    }
    
    const token = jwt.sign({
        userID:user._id,
        email:user.email,
        username:user.username
    },
    process.env.JWT_SECRET,
)
    res.cookie("token",token)
    res.send("login success");
})

module.exports = router;