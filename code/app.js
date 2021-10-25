const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {constants:{PORT}} = require("./constants");
const {appRouter} = require('./routes')
const {errorMess:{ UNKNOWN_ERROR, ROUTE_NOT_FOUND }} = require('./errors')

const {sequelize} = require("./dataBase")

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',appRouter);
app.use('*', _notFoundHandler);
app.use(_handleErrors);

sequelize.sync({alter:true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`app listen ${PORT} `);
    });
})

function _handleErrors(err, req, res, next) {
    console.log('_+_+_+_', err);
    res
        .status(err.status)
        .json({
            status: err.status,
            message: err.message || UNKNOWN_ERROR.message,
            customCode: err.customCode,
        });
}

function _notFoundHandler(err, req, res, next) {
    console.log('error ========== ', err);
    next({
        message: err.message || ROUTE_NOT_FOUND.message,
        status: err.status || ROUTE_NOT_FOUND.code,
    });
}