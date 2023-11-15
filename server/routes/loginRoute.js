const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

const secretKey = 'abcdefghijklmnop'

const router = express.Router()

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username })
        if(!user) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const token = jwt.sign({ userId: user._id, username: user.username }, secretKey)

        res.cookie('token', token).json({ message: 'Login successful', token })
    } catch(error) {
        console.error(error.message);
    }
})


module.exports= router;