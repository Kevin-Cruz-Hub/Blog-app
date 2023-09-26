const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/User')

// ** Create => post
// ** Read => get
// ** Updating => put
// ** Delete => delete

// //Signup
router.post('/signup', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({ username: req.body.username, email: req.body.email, password: hashedPass })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})
// //Login

router.post('/login'), async(req,res)=>{
    try{
        const user = User.findOne({username:req.body.username})
        !user&&res.status(400).json('There is now account with that username')

        const validate = await bcrypt.compare(req.body.password, password)
        !validate&&res.status(400).json('Wrong Password')

        const {password, ...others} = user.doc;
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = router