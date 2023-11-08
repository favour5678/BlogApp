const express = require('express');
const app = express();


app.get('/register', (req, res) => {
    // res.send('Hello World, ')
    res.json('This is the register page')
})


app.listen(4000)