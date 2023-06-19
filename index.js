const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const ExpressError = require('./utils/ExpressError.js');
const mainCtl = require('./controllers/mainCtl.js');

const app = express();
const port = 8080;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended:true }));


app.get('/', mainCtl.getHome );

app.post('/', mainCtl.getSupportSite );

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = 'Well Fudge!, Things went wrong...';
    res.status(statusCode).render('error', { pageTitle: 'Error', err });
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
