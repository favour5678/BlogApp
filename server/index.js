const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World how are you doing?')
})

app.listen(4000)