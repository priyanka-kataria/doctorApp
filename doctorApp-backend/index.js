require('dotenv').config();
const adminRoute =require('./routes/adminRoute.js')
var express = require('express');

var cors = require('cors');
var dbConnect = require('./config/Mongodb.js');
const connecttocloudinary=require("./config/cloudinary.js")

const app= express()
const port = process.env.PORT || 4000;

dbConnect();
connecttocloudinary();
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Working fine')
})

app.use('/api/admin',adminRoute)

app.listen(port, ()=>{
    console.log("Server started", port);

})
