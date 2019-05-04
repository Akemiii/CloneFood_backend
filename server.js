const express = require('express');
const app = express();
const env = require('dotenv');
const router = require('./routes');

env.config();

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () =>{
    console.log(`CloneFood is running under port: ${PORT}`);
})