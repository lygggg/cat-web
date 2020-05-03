import express from 'express';
import cors from 'cors';
import v1Route from './src/routes';
import session from 'express-session';
import mongoose from 'mongoose';
import redis from 'redis';
import connectRedis from 'connect-redis';

require('dotenv').config();

const port = 3000;
const app = express();
mongoose.connect('mongodb+srv://baayoo71:dl1532@cluster0-zfvee.mongodb.net/catweb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Connected');
})

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: '127.0.0.1',
  port:6379
});

app.use(session({
  secret: 'Rs89I67YEA55cLMgi0t6oyr8568e6KtD',
  resave: true,
  saveUninitialized: false,
  cookie: {
    name: 'user',
    httpOnly: false,
  },
  store: new RedisStore({ host: '15.164.220.31', port: 6369, client: redisClient, ttl: 86400 }),
}));


app.use(express.json());

app.use(cors({ origin: 'http://localhost:8080', credentials: true}));
// app.use(cors({ origin: 'http://catweb.s3-website.ap-northeast-2.amazonaws.com', credentials: true}));

app.use(v1Route);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}


export default app;
