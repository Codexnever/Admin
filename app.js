const express = require('express');
const app = express();
const port = 8080;
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');


const store = { 
    username: 'admin',
    password: 'password'
};

const partialsPath = path.join(__dirname, './views/partials');
const viewsPath = path.join(__dirname, './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('OD');
});
app.get('/Category', (req, res) => {
    res.render('Category');
});
app.get('/Brand', (req, res) => {
    res.render('Brand');
});
app.get('/Sub-category', (req, res) => {
    res.render('Sub-category');
});
app.get('/Payment', (req, res) => {
    res.render('Payment');
});
app.get('/Charges', (req, res) => {
    res.render('Charges');
});
app.get('/Unit', (req, res) => {
    res.render('Unit');
});
app.get('/Listing', (req, res) => {
    res.render('Listing');
});
app.get('/Customer', (req, res) => {
    res.render('Customer');
});
app.get('/Discount', (req, res) => {
    res.render('Discount');
});
app.get('/Employee', (req, res) => {
    res.render('Employee');
});
app.get('/Order', (req, res) => {
    res.render('Order');
});
app.get('/Tax', (req, res) => {
    res.render('Tax');
});
app.get('/Vender', (req, res) => {
    res.render('Vender');
});
app.get('/Bill', (req, res) => {
    res.render('Bill');
});
app.get('/Access', (req, res) => {
    res.render('Access');
});
app.get('/Help', (req, res) => {
    res.render('Help');
});
app.get('/Reports', (req, res) => {
    res.render('Reports');
});
app.get('/Setting', (req, res) => {
    res.render('Setting');
});

app.post('/submit', (req, res) => {
    const { username , password } = req.body;
    if (username === store.username && password === store.password) {
        res.redirect('/nextpage'); 
    } else {
        res.send('<script>alert("Invalid credentials. Please enter valid input."); window.location="/";</script>'); 
    }
});
app.get('/nextpage', (req, res) => {
   res.render('landing')
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
