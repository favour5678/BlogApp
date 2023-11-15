const cors = require('cors');
const express = require('express');
const port = 4000;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const secretKey = 'abcdefghijklmnop'

const registerRoute = require('./routes/RegisterRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())

const { default: mongoose } = require('mongoose');
mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/test')
let db = mongoose.connection;
db.once('open', function() {
    console.log('DATABASE CONNECTED')
})

app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use(cookieParser())

app.get('/profile', (req, res) => {
    const { token } = req.cookies;

    jwt.verify(token, secretKey, {}, (err, info) => {
        if(err) throw err;
        res.json(info)
        console.log(info)
    })
})

//   app.get('/profile', (req, res) => {
//     const { token } = req.cookies;

//     if(!token) {
//         return res.status(401).json({ message: 'Unauthorized' })
//     }

//     jwt.verify(token, secretKey, (err, decoded) => {
//         if(err) {
//             console.error('Error verifying token:', err);
//             return res.status(401).json({ message: 'Invalid token' })
//         };
        

//         const { username } = decoded;
//         console.log(decoded)
//         if (!username) {
//             console.error('Username not found in decoded payload');
//             return res.status(401).json({ message: 'Invalid token structure' });
//         }

//         res.json({ user: {username}, decoded })
//     })
// })

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  