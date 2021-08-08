const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Home Route');
});

app.get('/about', (req,res) => {
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

app.listen(3000, ()=>{
    console.log('Server Up and running on port 3000');
})


