//streams object allow to you to (read / write) using data before it has finished loading .
// data deliverd in chunck of data , package in buffer ,it move to the user when buffer fill in chunck 
// we using streams when we deal with larg and big files

const fs = require('fs');

//there is 4 types of streams( deplux ,Transform)

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//every type of streams is eventemitter (send event)
//streams have 4 event (data , end ,error ,finish)

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);
