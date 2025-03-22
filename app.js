const express = require('express');
const app = express();
const userRouter = require("./routes/user.routes.js");


app.listen(3000 , (req,res)=>{
    console.log('Server is running on port 3000');
})

//ejs
app.set("view engine","ejs");

app.use('/user',userRouter);