const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const logger = require('./middlewares/logger');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');

require('dotenv').config();

const app = express();

const {
    PORT,
    API_URL,
    DB_URL
} = process.env;

mongoose.connect(DB_URL, err => {
    if (err) throw err;
    console.log('Connected to database success');
})

app.use(cors);
app.use(logger);
app.use(bodyParser.json());
app.use(usersRouter);
app.use(booksRouter);
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
})

app.listen(PORT, () => {
    console.log(`Server start on ${API_URL}:${PORT}`)
});
