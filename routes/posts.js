const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

// //Get All Post 
router.get('/', async (req, res) => {
    console.log(req.params)
    try {
        const posts = await Post.find({}).sort({ updatedAt: "desc" })
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})
// //Create Post
router.post('/:id', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(400).json(err)
    }
})
// //Get Post 
router.get('/:id', async (req, res) => {
    console.log(req.params)
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})
// //Update Post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).res.json(updatedPost)
            } catch (err) {
                req.status(500).json(err)
            }
        } else {
            res.status(401).json('You can only update posts you created')

        }

    } catch (err) {
        req.status(500).json(err)
    }
})
// //Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).res.json('Post has been deleted')
            } catch (err) {
                req.status(500).json(err)
            }
        } else {
            res.status(401).json('You can onloy delete posts you created')

        }

    } catch (err) {
        req.status(500).json(err)
    }
})
module.exports = router;