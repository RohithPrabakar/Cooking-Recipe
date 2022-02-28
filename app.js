const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fash = require('connect-flash');
require('dotenv').config();
const routes = require('./server/routes/recipeRoutes.js');
const flash = require("connect-flash/lib/flash");

const app = express();
const port = process.env.PORT || 3000;



app.use(express.urlencoded( { extended: true } ));
app.use(express.static('Public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
    secret: 'CookingBlogSecretSession',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening in port ${port}. `);
});
