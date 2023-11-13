const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

const router = express.Router()

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try{
        if (!username || !password) {
            return res.status(400).json({ message: 'Both username and password are required' })
        }

        const existingUser = await UserModel.findOne({ username });
        if(existingUser) {
            return res.status(400).json({ message: 'Username already exists. Choose a different one'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await UserModel.create({ username, password: hashedPassword})
        res.status(200).json(newUser)
    } catch(error) {
        console.error(error.message)
        res.status(500).json({ message: 'Internal server error' });
    }
})


module.exports = router;