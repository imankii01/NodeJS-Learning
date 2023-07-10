const http = require("http");

const DataContorl=(res,resp)=>{
    resp.write("hello this is ankit stfghjkl;art learning nodejs")
    resp.end();
}

http.createServer(DataContorl).listen(4500);
