//const http = require('http');

const path = require('path');

const adminRoutes = require('./route/admin');

const shopRoutes = require('./route/shop');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//add view engine handlebars
app.set('view engine', 'ejs');
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