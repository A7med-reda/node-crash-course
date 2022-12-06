const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  /*
  res.send()
  set header content-type html (default)
  set statues-code  =200   (default)
  end the res .end( )       (default)
 */
  // res.send('<p>home page</p>');
  
  /*
  we must tell Express that(./views...) is relative to root path(project that filles in app.js) or where he from
  so we use option obj {root: } to set it as reltive root path of our project =__dirname .
  or we can use Path Module .
  if we didnt do that => Express will go to look for the default absoule root path of computer.
   */
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
/*
  Use()-> is fire to every single (all) request coming and fire middleware if req didnt match any previous routs
  [.get() ,.post ,.delete()].
   so  the postion must be in bottom of routes to handle 404 
  used to create middleware fun()and fire them.
*/
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
