const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(`${filePath}`, "this is a somple text file");clear

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// *****************apend file udpated a file*********************
// fs.appendFile(filePath, "and my file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// *****************************File name is updated
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file name is updated");
//   }
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);
