//streams object allow to you to (read / write) using data before it has finished loading .
// data deliverd in chunck of data , package in buffer ,it move to the user when buffer fill in chunk 
// we using streams when we deal with larg and big files

const fs = require('fs');

//there is 4 types of streams( deplux ,Transform)

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//every type of streams is eventemitter (send event)
//streams have 4 event (data , end ,error ,finish)

//  data − This event is fired when there is data is available to read.
//  end − This event is fired when there is no more data to read.
//  error − This event is fired when there is any error receiving or writing data.
//  finish − This event is fired when all the data has been flushed to underlying system.

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
//Piping is a mechanism where provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream
// readStream.pipe(writeStream);
