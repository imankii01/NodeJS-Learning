const app = require("./app");
console.log("Server start");
var a = 2;
var b = 2;
var c = 2;
console.log("SUM =", a + b + c);
console.log("SUM =", a + b + c);

var x = 20;
if (x === 40) {
  console.log("not mathc");
} else {
  for (i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
      console.log("porogrm iutre");
    }
  }
}

console.log("*********************Export modile**********");
console.log(app.x, app.y);

const func = () => {
  console.log("function called");
};
func();
const arr=[1,3,4,5,6,7,8,9,44,8,8,3]
let result = arr.filter((item)=>{
return item >2
})
console.log(result)