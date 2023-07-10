// Embedded js templates
const express = require("express");
const app = express();
const path = require("path");
// const publicPath = path.join(__dirname, "Public");
// app.use(express.static(publicPath));
app.set('view engine ','ejs')

app.get('/profile',(_,resp)=>{
    resp.render("profile")
})

app.get('*',(req,resp)=>{
    resp.sendFile("<h1>404 Page not found</h1>")
})
app.listen(5000);
