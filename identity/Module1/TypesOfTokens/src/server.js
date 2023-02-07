var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

var port = 3007;
app.use(morgan('dev'));

// set front-end folder to serve public asses
app.use(express.static('web'));

// set up our one route to the index.html file
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + 'web/index.html'));
});

//start the server
app.listen(port);
console.log(`Listening on port ${port}...`);
console.log('Press CTRL + C to stop the web server...');