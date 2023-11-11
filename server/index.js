const express = require('express');
const cors = require('cors');
const UserModel = require('./models/UserModel');
const bcrypt = require('bcrypt');
const port = 4000;

const app = express();

app.use(cors());
app.use(express.json())

const { default: mongoose } = require('mongoose');
mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/test')
let db = mongoose.connection;
db.once('open', function() {
    console.log('DATABASE CONNECTED')
})



app.post('/register', async (req, res) => {
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
        res.status(201).json(newUser)
    } catch(error) {
        console.error(error.message)
        res.status(500).json({ message: 'Internal server error' });
    }
})


// app.post('/login', async (req, res) => {

// })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  