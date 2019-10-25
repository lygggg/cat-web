var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet());
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
app.listen(9091,function(){
    console.log("실행중...")
});
const path = require('path');
app.get('/home',function(req,res){;

    res.sendFile(path.join(__dirname)+'/index.html')
 
})

app.get('/login',function(req,res){
  
    res.sendFile(path.join(__dirname)+'/login.html')
  
})
app.get('/buymenu',function(req,res){
    res.sendFile(path.join(__dirname)+'/saleslist.html')
})
app.get('/homein',function(req,res){
  
  res.sendFile(path.join(__dirname)+'/homein.html')
  
  
  
})
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(compression());
app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave : false,
    saveUninitialized: true,
    store:new FileStore()
}));
var authData = {
    username:'baayoo71',
    password: 'dl1532',
    nikname: '이영규'
}






  app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  console.log('serializeUser',user)
  done(null,user.username)
 // done(null, user.id)
});
passport.deserializeUser(function (id, done) {
  console.log('serializeUser',id)
  done(null, authData);
});
passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'pwd'
    },
  function (username, pwd, done) {
   console.log('LocalStrategy',username, pwd);
   if(username === authData.username){
    console.log(1);
    if(pwd === authData.password){
      console.log(2);
      return done(null, authData);
    } else {
      console.log(3);
      return done(null, false, {
        message: 'Incorrect password.'
      });
    }
} else {
    console.log(4);
    return done(null, false, {
      message: 'Incorrect username.'
    });
  }
}
));

app.post('/login_process', passport.authenticate('local', {successRedirect: '/homein', failureRedirect: '/login'}), );
  
 