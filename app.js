//const http = require('http');

const path = require('path');

const adminRoutes = require('./route/admin');

const shopRoutes = require('./route/shop');

const express = require('express');

const bodyParser = require('body-parser');

//Handlebar install
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs());

//add view engine handlebars
app.set('view engine', 'hbs');

//Add View Engine with set method with pug
//app.set('view engine', 'pug');

// Root Direcotory for pug template
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not found</h1>");
});

//const server = http.createServer(app);
app.listen(3000);