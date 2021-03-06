const express = require("express");
const dotenv=require("dotenv");
const dbConnect = require("./config/dbConnect");
const { errorHandler,notFound } = require("./middlewares/errorMiddleWare");

const userRoute = require("./routes/users/usersRoute");
const app = express();

dotenv.config();
dbConnect();
app.use(express.json());

app.get('/' , (req , res)=>{

   res.json({msg: "Welcome to Expenses Tracker API"});

});

app.use('/api/users',userRoute);
app.use(notFound);
app.use(errorHandler);

module.exports = app; 