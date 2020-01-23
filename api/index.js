import createError from 'http-errors';
import express from 'express';
import cors from 'cors';
import v1Route from './src/routes';
import session from 'express-session';
import mongoose from 'mongoose';

require('dotenv').config();

const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/cat_web', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Connected');
})

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(session({
  secret: 'Rs89I67YEA55cLMgi0t6oyr8568e6KtD',
  resave: false,
  saveUninitialized: true,
  cookie: {
    name: 'user',
    httpOnly: false,
  },
}));

app.use(express.json());

app.use(cors(corsOptions));

app.use(v1Route);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  let apiError = err;

  if (!err.status) {
    apiError = createError(err);
  }

  if (process.env.NODE_ENV === 'test') {
    const errObj = {
      req: {
        headers: req.headers,
        query: req.query,
        body: req.body,
        route: req.route,
      },
      error: {
        message: apiError.message,
        stack: apiError.stack,
        status: apiError.status,
      },
      user: req.user,
    };

    logger.error(`${moment().format('YYYY-MM-DD HH:mm:ss')}`, errObj);
  } else {
    res.locals.message = apiError.message;
    res.locals.error = apiError;
  }
});
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}


export default app;
