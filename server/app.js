const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});

const PORT = process.env.PORT;
require('./db/conn');

const middleware = (req,res,next) => {
    console.log('Hello my middleware');
    next();
}

app.get('/', (req,res) => {
    res.send('Home Route');
});

app.get('/about',middleware, (req,res) => {
    res.send('about Route');
});

app.get('/contact', (req,res) => {
    res.send('contact Route');
});

app.get('/signin', (req,res) => {
    res.send('signin Route');
});

app.get('/signup', (req,res) => {
    res.send('signup Route');
});

app.listen(PORT, ()=>{
    console.log(`Server Up and running on port ${PORT}`);
})


