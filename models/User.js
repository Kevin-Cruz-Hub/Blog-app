const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true }
},{timestamps:true})

const User = mongoose.model('User', UserSchema);

module.exports = User;