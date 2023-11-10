const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 4000;


const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.post('/register', (req, res) => {
    const { email, password } = req.body

    res.json({ requestData: {email, password} })
    res.status(200).json({ message: 'Account created successfully' })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongodb+srv://blog:p2000oSxycAQePoz@cluster0.jqgb6sg.mongodb.net/?retryWrites=true&w=majority