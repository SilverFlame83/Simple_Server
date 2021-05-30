const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Find some examples with express', snippet:'Lorem ipsum dodlor sit ammet conseevdtor'},
        {title: 'Let\'s start mastering your skils', snippet:'Lorem ipsum dodlor sit ammet conseevdtor'},
        {title: 'How to defeat the browser', snippet:'Lorem ipsum dodlor sit ammet conseevdtor'}
    ]
    res.render('index',{title: 'Home', blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About'})
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title: 'Create'})
});

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
});