const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simula un database in memoria
const votes = [];

// Endpoint per ricevere i voti
app.post('/submit-vote', (req, res) => {
    const { vote } = req.body;
    if (!vote) {
        return res.status(400).send('Invalid vote');
    }
    votes.push(vote);
    res.send('Vote received successfully!');
});

// Endpoint per vedere tutti i voti (opzionale)
app.get('/votes', (req, res) => {
    res.json(votes);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
