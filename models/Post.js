const mongoose = require('mongoose');
const { Schema } = mongoose

const PostSchema = Schema({
    title:{type:String, required:true, unique},
    description:{type:String, required:true},
    photos:{type:String, required: false},
    username:{type:String, required: true}
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;