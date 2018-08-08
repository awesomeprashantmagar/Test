const express= require('express');
var app = express();

const hbs = require('hbs');

app.set('view engine','hbs');

//app.use(express.static(__dirname );
app.get('/',( req, res) => {

  res.send('<h1>Hellow express!</h1>')

});

app.listen(3000);
