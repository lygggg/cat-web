import createError from 'http-errors';
import express from 'express';
import cors from 'cors';
import response from './src/utils/response'
import v1Route from './src/routes';

require('dotenv').config();

const port = 3000;
const app = express();

const corsOptions = {
    origin: '*',
    credentials: true
};

app.use(express.json());

app.use(cors(corsOptions));

app.use(v1Route);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    let apiError = err;

    if(!err.status) {
        apiError = createError(err);
    }

    if(process.env.NODE_ENV === 'test') {
        const errObj = {
            req: {
                headers: req.headers,
                query: req.query,
                body: req.body,
                route:req.route,
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
    // return response(res, {
    //     message: apiError.message,

    // }, apiError.status)
})
if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    })
}


export default app;
