const fs = require("fs");
// fs.writeFileSync("appleee.txt","her eis the tekbnslkjdfalksdfjj");
const path = require("path");
const dirPath = path.join(__dirname, "Files");
// console.warn(dirPath);
// for (i = 5; i < 100; i++) {
//   fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file ");
// }

fs.readdir(dirPath, (err, files) => {
  //   console.warn(files);
  files.forEach((item) => {
    console.warn(item);
  });
});
