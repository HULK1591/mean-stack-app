var express = require('express');
var app = express();

//SET the port num that the application is going to listern to
app.set('port', 3000);

app.listen(app.get('port'), () =>{
    console.log('Move bitch! Express running at port: ' + app.get('port'));
});
