const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const userSchema = new Schema({
    username: {type: String, required: true, minLength: 4, unique: true},
    password: {type: String, required: true, minLength: 6,}
})


const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;

// module.exports = mongoose.model('User', userSchema)