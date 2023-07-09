// in synchronus operation task are performed one at a time
//  user ---> products--->cites
// In asynchronus second task do not wait to finish first task
// user <---->Products<------>Citiees

// console.log("start exe......");
let a = 10;
let b = 2;

setTimeout(() => {
  //   console.log("logic exe......");
  console.log("compelete exe......", a + b);
}, 2000);

setTimeout(() => {
  b = 30;
}, 0);
