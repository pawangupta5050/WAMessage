const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT
const dbConnection = require('./connection.js')

dbConnection().then(() => console.log('Connections established')).catch((error) => console.log(error))

app.listen(port, () => console.log('listening on port ' + port));