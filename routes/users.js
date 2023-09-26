const router = require('express').Router()
const Post = require('../models/Post')

// ** Create => post
// ** Read => get
// ** Updating => put
// ** Delete => delete

// //Update
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(401).json('You are not allowed to update')
    }
})

module.exports = router