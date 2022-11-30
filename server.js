//This How Node Work Under the Hood --> Experss is eaiser and Faster But you should Know This Frist 

const http = require('http');
const fs = require('fs');

/*
req object contain 
  -> Headers : meta Data About Reqest
  -> type of the Request (req.Method = post-get-put)
  -> Expected response type
  -> URl  (req.url --> start after `localHost:8080/ex about,blog, / root ` )
*/

 /*
res object contain   
   -> Responce Header : info about the response type to the browser(type of data sending)
   EX  res.SetHeader('content-type',text/ Html-Json-plain )
   
   ->set cookies 
 
 */
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  // set header content type
  res.setHeader('Content-Type', 'text/html');
  
  // --> Data We Want to send back
  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  //--> end the req
  // res.end();

  // send html file
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  // WE CAN SEND DATA IN res.end() IF ITS ONLY ONE NOT SENDING MULTI
  //   res.end(data);
  // });
  // 
  
  
  
  // Routing
// Way To Figure Out The URL User Request And Depend on Tjat URl Send Back Different HTMl  File    
  
  //Folder Have All HTMl Files 
  let path = './views/';
  
  
  /*
  States Code 
  
    Informational responses (100 – 199)
    Successful responses (200 – 299) -> ok
    Redirection messages (300 – 399)  resource moved (redirects) 
    Client error responses (400 – 499)  404 not found
    Server error responses (500 – 599)
  */
  
  /* 
  Redirect
   The Location response header indicates the URL to redirect a page to   
      In cases of redirection, the HTTP method used to make the new request(so we have to use-->res.end()) to fetch the page pointed to by Location depends on the original method and the kind of redirection:
      303 (See Other) responses always lead to the use of a GET method.
      307 (Temporary Redirect) and 308 (Permanent Redirect) don't change the method used in the original request.
      301 (Moved Permanently) and 302 (Found) don't change the method most of the time, though older user-agents may (so you basically don't know).
  */
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
      
    //redirect  ex
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
