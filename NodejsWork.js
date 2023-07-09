/* Call stack----------------->{

    call stack ---> Nodes API ___> callback Queue-----Evetn loop

}
--->>--->> Express js -->  frame work of nodejs

npm install express


*/

const express = require("express");
const app = express();
app.get("", (req, resp) => {
  console.log(req.query);
  resp.send(
    "<h1>hello,this is my home page ,my name is " +
      ` ${req.query.name}</h1>
    <h1> Welcome to our website</h1>
    <a href="/about">About Page<a>
    <a href="/help">Help Page<a>
    `
  );
});
app.get("/about", (req, resp) => {
  resp.send(`hello,this is my about page
  <a href="/">Home Page</a>
  <a href="/help">Help Page</a>`);
});
app.get("/help", (req, resp) => {
  resp.send(`hello,this is my Help page
  <a href="/">Home Page</a>
  <a href="/about">About Page</a>`);
});

app.listen(5000);
