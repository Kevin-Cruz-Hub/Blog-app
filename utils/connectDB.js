const mongoose = require('mongoose')

module.exports = function connectDB(){
    // Connecting to MongoDB
    mongoose.connect(process.env.DATABASE_URL)

    // Check for a connection
    const db = mongoose.connection;

    // Test the close
    // setTimeout(()=>{
    //     db.close();
    // },5000)

    // lets the user know of an error
    db.on('error',(e)=> console.log(e))
    // Lets the user know if MongoDB was connected
    db.on('open',(e)=> console.log('Connected to MongoDB'))
    // Lets the iser know if MongoDB session ended
    db.on('close',(e)=> console.log('MongoDB session has ended'))

}