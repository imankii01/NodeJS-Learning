// Handle Asynchronus
let a = 20;
let b = 0;
let waitingData = new Promise((resolve, rejecet) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
