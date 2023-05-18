require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 5000;

const expressLayout = require('express-ejs-layouts');



app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');
app.use(expressLayout);


app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log (`listening on ${PORT}`)
})



