const express = require('express');
const app = express();
const env = require('dotenv');
const router = require('./routes');
const bodyParser = require('body-parser');
env.config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(router);

app.listen(PORT, () =>{
    console.log(`CloneFood is running under port: ${PORT}`);
});
