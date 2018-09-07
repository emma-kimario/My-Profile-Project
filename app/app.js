var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(express.static('app/vendor'));

app.use(require('./routes/indexRoute'));

var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port') + ': ' + 'Visit http://localhost:'+ app.get('port') + '/');
});