const express = require('express');
const app = express();
const userRouter = require("./routes/user.routes.js");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const indexRouter = require("./routes/index.routes.js");

//env
dotenv.config();

//cookie
app.use(cookieParser());

//connect to db
const connectToDB = require("./config/db.js");
connectToDB();

app.listen(3000 , (req,res)=>{
    console.log('Server is running on port 3000');
})

//ejs
app.set("view engine","ejs");

//parsing post data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router
app.use('/user',userRouter);

//index router
app.use('/',indexRouter);