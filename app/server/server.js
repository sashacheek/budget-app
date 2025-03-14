const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Backend is running")
});

app.post('/entry', (req, res) => {
    // var amount = req.body.amount;
    // console.log(req.body);
    // console.log();
    // console.log(amount);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));