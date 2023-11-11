const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/UserModel');
// const User = require('./models/UserModel');
const bcrypt = require('bcrypt');
const port = 4000;

// const salt = bcrypt.genSaltSync(10);

const app = express();

app.use(cors())
app.use(express.json())


// mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/test')


// app.post('/register', async(req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await UserModel.create({username, password: bcrypt.hashSync(password, salt)})
//     res.json(user);
//     } catch(error) {
//         console.log(error.message)
//         res.status(400).json(error.message)
//     }
// })

app.post('/register', async(req, res) => {
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

        // const newUser = await UserModel.create({ username, password: hashedPassword})
        const newUser = new UserModel({ username, password: hashedPassword})
        await newUser.save()
        res.status(201).json(newUser)
    } catch(error) {
        console.error(error.message)
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });