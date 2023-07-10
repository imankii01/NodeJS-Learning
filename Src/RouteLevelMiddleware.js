/*
Route level middleware -> use only for specific route, they can work on single route ,group of route,all route 
APply middle ware on single rout
make middleware in different file
apply middleware in the  gorup of route

*/

const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  console.log("reqFilter");
  if (!req.query.age) {
    resp.send("Please provide age");
  } else if (req.query.age < 18) {
    resp.send("U can't access this page provide age");
  } else {
    next();
  }
};

// app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to homepage");
});
app.get("/users", reqFilter, (req, resp) => {
  resp.send("welcome to users page");
});
app.get("/about", (req, resp) => {
  resp.send("welcome to  about page");
});

app.listen(5000);
