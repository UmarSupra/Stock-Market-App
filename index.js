// Stock Market Portfolio App by Umar Khan

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// user body parser middleware
app.use(bodyParser.urlencoded({extended: false}));


// API Key pk_26a2d6a1506a472ab5c96a0f84489218


function call_api (finishedAPI, ticker) {
    request('https://api.iex.cloud/v1/data/core/quote/' + ticker + '?token=pk_26a2d6a1506a472ab5c96a0f84489218', {json: true}, (err, res, body) => {
        if (err) {return console.log("Error: " + err);}
        if (res.statusCode === 200) {
            finishedAPI(body);
        };
    });
}



//Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is other stuff!";

//Set Handlebar Routes
app.get('/', (req, res) => {
    call_api(function(doneAPI) {
        res.render('home', {
            stock: doneAPI[0]
        });
    }, "fb");
});

app.post('/', (req, res) => {
    call_api(function(doneAPI) {
        //posted_stuff = req.body.stock_ticker;
        res.render('home', {
            stock: doneAPI[0],
        });
    }, req.body.stock_ticker);
});

// Create about page route
app.get('/about.html', (req, res) => {
    res.render('about');
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log("Server listening on port " + PORT));