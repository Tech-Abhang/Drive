const express = require('express');
const app = express();

app.listen(3000 , (req,res)=>{
    console.log('Server is running on port 3000');
})

//ejs
app.set("view engine","ejs");

app.get('/' , (req,res)=>{
    res.render('index');
})