const express = require('express');
const notes = require('./data/notes');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
    res.send("API IS Running....");
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    // console.log(req.params);
    res.send(note);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is started on PORT ${PORT}`));