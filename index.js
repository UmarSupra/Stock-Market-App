// Stock Market Portfolio App by Umar Khan

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');

const PORT = process.env.PORT || 5000;


// API Key pk_26a2d6a1506a472ab5c96a0f84489218

request('https://api.iex.cloud/v1/data/core/quote/fb?token=pk_26a2d6a1506a472ab5c96a0f84489218', {json: true}, (err, res, body) => {
    if (err) {return console.log("Error: " + err);}
    if (res.statusCode === 200) {
        console.log(body);
    }
});

//Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is other stuff!";

//Set Handlebar Routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: otherstuff
    });
});

// Create about page route
app.get('/about.html', (req, res) => {
    res.render('about');
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log("Server listening on port " + PORT));