const express = require('express');
const app = express();
app.locals.pretty = true
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/topic/new', function(req,res){
    res.send('hi')
})
app.listen(3000, function(){
    console.log('connected, 3000 port')
})