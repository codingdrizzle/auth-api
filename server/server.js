
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { router } = require('../routes');
const { ErrorHandler, ErrorLogger, InvalidUrl } = require('../utils/exceptions');

const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}));

//enabling all cors request for all routes
app.use(cors());

app.use('/api/v1', router);

app.use(InvalidUrl)
app.use(ErrorLogger);
app.use(ErrorHandler);


module.exports = {app};
