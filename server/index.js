const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001
const MONGODB = process.env.MONGODB

const start = async() =>{
    try{
        await mongoose.connect(MONGODB)
        app.listen(PORT,()=>console.log(PORT))
    }
    catch(err){
        console.error(err)
    }
}

start()