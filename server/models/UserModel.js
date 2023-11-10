const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const userSchema = new Schema({
    username: {type: String, require: true, unique: true, min: 4},
    password: {type: String, require: true}
}, {timestamps: true})


// module.exports = mongoose.model('User', userSchema)
const UserModel = model('User', userSchema);

module.exports = UserModel;