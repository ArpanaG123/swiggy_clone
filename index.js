const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 8700;

require('dotenv').config()
app.use(express.json())

const db = require('./config/db')

app.get('/',(req,res) => {
    res.send("Hello world")
})
const createUser = require("./Routes/CreateUser")

app.use("/api/users",createUser);


app.listen(port,() => {
    console.log(`The server is running on port number ${port}`);
})