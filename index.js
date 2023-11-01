// Stock Market Portfolio App by Umar Khan

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

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


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log("Server listening on port " + PORT));