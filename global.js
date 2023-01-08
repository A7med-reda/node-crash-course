const speak = () => {
  console.log('hello, ninjas');
}
/*
 Node.js Global Objects are the objects that are available in all modules.
 Global Objects are built-in objects that are part of the JavaScript
 and can be used directly in the application without importing any particular module.
 The Node.js Global Objects are listed 
*/
speak();

// Global Object

// console.log(global);

// global.setTimeout(() => {
//   console.log('in the timeout');
// }, 3000);

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

// no access to DOM methods
console.log(document.querySelector);
