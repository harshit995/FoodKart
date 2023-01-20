const express =require('express');
const colors = require('colors');
const morgan = require('morgan');

require('dotenv').config()

//rest objects
const app=express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//routes
app.get('/',(req,res)=>{
    res.status(200).send()
})
