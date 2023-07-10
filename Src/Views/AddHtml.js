const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "Public");
app.use(express.static(publicPath));


app.get("/profile", (_, resp) => {
  const user = {
    name: "ANkit",
    email: "codewithankit047@gmail.com",
    country: "India",
  };
  resp.render("profile", { user });
});

app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('/contact',(req,resp)=>{
//     resp.sendFile(`${publicPath}/contact.html`)
// })
// app.get('/doctor',(req,resp)=>{
//     resp.sendFile(`${publicPath}/doctor.html`)
// })
// app.get('/testimonial',(req,resp)=>{
//     resp.sendFile(`${publicPath}/testimonial.html`)
// })
// app.get('/treatment',(req,resp)=>{
//     resp.sendFile(`${publicPath}/treatment.html`)
// })
app.get("*", (req, resp) => {
  resp.sendFile("<h1>404 Page not found</h1>");
});
app.listen(5000);
