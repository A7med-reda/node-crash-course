const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

// console.log('last line');

// writing files
//replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
});


//Appending to a File: The fs.appendFile() method is used to synchronously append the data to the file. Syntax:

// fs.appendFile(filepath, data, options, callback);

// directories
// return error if the dir is exist before => handle this error
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}