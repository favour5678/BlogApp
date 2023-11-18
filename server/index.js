const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

const app = express();

app.use(express.json())

const { default: mongoose } = require('mongoose');
mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/test')
let db = mongoose.connection;
db.once('open', function() {
    console.log('DATABASE CONNECTED')
}) 





const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });