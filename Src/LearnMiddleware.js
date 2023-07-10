/*
middleware --- why we used
to access the request and access and we can modify the request and access 
 
types---
1.Application level
2.Router level middleware-> to use only specific rout (like we have to use only 2 routes)
3.Error handling
4.bulit-in middleware
5.third party middleware

*/

const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {      ///Application route -> becouse it apply on all the routes by defualt so this is called applcaition route
  console.log("reqFilter");
  if (!req.query.age) {
    resp.send("Please provide age");
  } else if (req.query.age < 18) {
    resp.send("U can't access this page provide age");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to homepage");
});
app.get("/users", (req, resp) => {
  resp.send("welcome to users page");
});

app.listen(5000);
