// require and instantiate express
const app = require('express')()

var assignment = require('./model/assignment.json');

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
    res.render('index', {
        assignment: assignment,
    });
});

// demo page
app.get('/demo/', function (req, res) {
    res.render('demo', {
        assignment: assignment,
    });
});

app.listen(8082);

console.log('listening on port 8082');



