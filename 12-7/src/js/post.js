const http = require("http");
const querystring = require("querystring");

http.createServer((req,res)=>{
    let post = '';
    req.on('data',(chunk)=>{
        post += chunk;
    });

    req.on('end',()=>{
        post = querystring.parse(post);
    });
}).listen(3899,()=>{
    console.log("server is running,localhost:3899");
});
