const express = require('express');
require('dotenv').config();
const path = require('path');
const multer = require('multer');
const favicon = require('serve-favicon');
const logger = require('morgan');


const app = express()
const PORT = process.env.PORT || 3001;

const connectDB = require('./utils/connectDB')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
// //=====================================================
// **Middleware
app.use(logger('dev'));//allows you to see information when a request is made
app.use(express.json());// parses incoming requests to JSON

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// //=====================================================
app.use('/', (req, res) => {
    console.log('Working')
})

// //Image Upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)

// *Catch all Route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// //=====================================================
// **Database
connectDB()
// //=====================================================
// **Listener
app.listen(PORT, () => {
    console.log(`Express is listening on port :${PORT}`)
})