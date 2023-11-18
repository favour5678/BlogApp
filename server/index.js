const express = require('express');
const port = 4000;

const app = express();

app.use(express.json())

const { default: mongoose } = require('mongoose');
mongoose.connect('mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/test')
let db = mongoose.connection;
db.once('open', function() {
    console.log('DATABASE CONNECTED')
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  