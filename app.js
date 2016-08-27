/**
 * App for Sign-In Application. Hooks app to express.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path =  require('path');

/**
 * View engine
 */
app.set('views', __dirname + path.join('/bundle'));
app.use('', express.static(path.join(__dirname, 'bundle')));
app.set('view engine', 'ejs');


/**
 * Route to main page
 */
app.get('*', function (req, res) {
    res.render(path.join('main.ejs'));
});

/**
 * Creating port.
 */
app.listen(port, function() {
    console.log("If does not automatically reload, please open Localhost: 3000");
});
