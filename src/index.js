require('dotenv').config();
const express = require('express');
const connectToMongoDB = require('./mongodb.config.js');
const app = express();

const port = process.env.PORT

connectToMongoDB();

app.listen(port, () => {
    console.log(`server running in ${port}`);
})