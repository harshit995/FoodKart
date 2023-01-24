const express =require('express');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
require('dotenv').config()

const PORT=process.env.PORT ||8080

//rest objects
const app=express();

//database
connectDB();

//

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user',require("./routes/userRoutes"))



//port
const start = async ()=>{
    try {
        // await connectDb(process.env.DATABASE);
        app.listen(PORT,()=>{
            console.log(`application running on ${PORT}`);
        })
    } catch (error) {
        console.log("error")
    }
}

start();