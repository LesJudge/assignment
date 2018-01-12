// require and instantiate express
const app = require('express')()

var assignment = require('./model/assignment.json');

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
    res.render('index', {
        data: data,
        assignment: assignment,
    });
});

app.listen(8081);

console.log('listening on port 8081');



