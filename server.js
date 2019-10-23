const express = require('express');
const app = express()
app.listen(9091);
const path = require('path');
app.get('/',function(req,res){;
    res.sendFile(path.join(__dirname)+'/index.html')
})

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname)+'/login.html')
})
app.use(express.static('public'));
