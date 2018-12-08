/**
 * 利用原生模块搭建静态资源服务器
 *  */
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("./mime");


http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;
    // let pathObj = path.parse(pathname);
    // console.log(pathObj);
    let realPath = path.join((__dirname).slice(0,-2),pathname);
    

    let ext = path.extname(pathname).slice(1);
    console.log(ext); 
    fs.readFile(realPath,(err,data)=>{
        try {
            res.writeHead(200,{"Content-Type":`${mime[ext]};charset=utf-8`});
            res.end(data);
        } catch (error) {
            console.log(err);
        }
    });
}).listen(5555,()=>{
    console.log("server is running on port 5555");
});