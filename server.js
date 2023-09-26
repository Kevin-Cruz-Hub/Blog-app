const express = require('express');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3001;

const connectDB = require('./utils/connectDB')
// //=====================================================
app.use('/', (req,res)=>{
    console.log('Working')
})
// //=====================================================
// **Database
connectDB()
// //=====================================================
// **Listener
app.listen(PORT, ()=>{
    console.log(`Express is listening on port :${PORT}`)
})