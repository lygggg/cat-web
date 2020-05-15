import express from 'express';
import cors from 'cors';
import v1Route from './src/routes';
import session from 'express-session';
import mongoose from 'mongoose';
import redis from 'redis';
import connectRedis from 'connect-redis';
require('dotenv').config();

const port = process.env.PORT;
const app = express();
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Connected');
})

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: process.env.HOST,
  port: process.env.REDIS_PORT
});

app.use(session({
  secret: 'Rs89I67YEA55cLMgi0t6oyr8568e6KtD',
  resave: true,
  saveUninitialized: false,
  cookie: {
    name: 'user',
    httpOnly: false,
  },
  store: new RedisStore({ client: redisClient, ttl: 86400 }),
}));


app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN_DEV, credentials: true}));

app.use(v1Route);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}


export default app;
