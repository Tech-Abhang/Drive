const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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
    (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array(),message:"invalid data"});
    }

    console.log(req.body);
    res.send(errors);
})

module.exports = router;