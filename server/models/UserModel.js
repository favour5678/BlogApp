const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const userSchema = new Schema({
    email: {type: String, require: true, unique: true, index: true},
    password: {type: String, require: true}
}, {timestamps: true})


// module.exports = mongoose.model('User', userSchema)
const UserModel = model('User', userSchema)
module.exports = UserModel