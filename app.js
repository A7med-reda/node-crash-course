const express = require('express');
const morgan = require('morgan');

// express app
const app = express();
/*
 middleware don't run in sequntial(express think you send res) so the next middleware(any code) will not run.
 unless you fire next() 
*/



// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

/*
express.static(root)
a built-in middleware function in Express. 
It serves static files(js css image)to browser(front-end)
because server protect your static file from accsse from browser 
*/
// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});
/*
Morgan library is an HTTP request logger middleware 
Logs the HTTP requests along with some other information. 
 dev - tiny format
*/
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
