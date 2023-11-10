const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
// const UserModel = require('./models/UserModel');
const User = require('./models/UserModel')
const port = process.env.PORT || 4000;


const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/?retryWrites=true&w=majority')


app.post('/register', async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({email, password})
    res.json(user)
    } catch(error) {
        res.status(400).json(error)
    }
})