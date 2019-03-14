var express = require('express');
var app = express();

//SET the port num that the application is going to listern to
app.set('port', 3000);

var server = app.listen(app.get('port'), () =>{
    var port = server.address().port;
    console.log('Move bitch! Express running at port: ' + app.get('port'));
});
console.log('Me first');
