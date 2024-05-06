require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require('./routes');

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// eslint-disable-next-line no-constant-condition, no-cond-assign
if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'));
}

app.use('/v1/api', apiRoutes);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port:${port}`));
